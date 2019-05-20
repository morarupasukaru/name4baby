import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firstname, Gender } from './firstname';
import { TranslateService } from '@ngx-translate/core';

export class DataLoadedEvent {
  errorMessage: string;
  ok: boolean;
}

export class SearchResultEvent {
  foundFirstnames: Firstname[];
}

@Injectable()
export class FirstnamesService {

  localStorageUrlKey = 'nowname.firstnamesUrl';
  localStorageFirstnamesKey = 'nowname.firstnames';
  localStorageDefaultCriteriasKey = 'nowname.searchcriterias';

  firstnamesUrl = 'assets/firstnames_v1.json';
  firstnames: Firstname[];

  @Output() dataLoaded: EventEmitter<DataLoadedEvent> = new EventEmitter();
  @Output() searchStarted: EventEmitter<void> = new EventEmitter();
  @Output() searchFinished: EventEmitter<SearchResultEvent> = new EventEmitter();

  searching = false;

  constructor(private http: HttpClient, private translate: TranslateService) {
   }

  fetchFirstnames() {
    const savedFirstnames = this.getFirstnamesFromLocalStorage();
    const hasNewVersion = this.firstnamesUrl !== localStorage.getItem(this.localStorageUrlKey);
    if (!savedFirstnames || hasNewVersion) {
      const promise = this.loadFirstnamesFromNetwork(this.firstnamesUrl);
      promise.then((loadedFirstnames: Firstname[]) => {
        const consolidatedFirstnames = this.mergeFirstnames(loadedFirstnames, savedFirstnames, hasNewVersion);
        this.saveFirstnames(consolidatedFirstnames);
        this.firstnames = consolidatedFirstnames;
        this.dataLoaded.emit({ok: true, errorMessage: null});
      }, (error) => {
        console.log('Got error:' + JSON.stringify(error));
        this.translate.get('message.cannotLoadFirstnamesJson').subscribe((res: string) => {
          this.dataLoaded.emit({ok: false, errorMessage: res});
        });
      });
    } else {
      this.firstnames = savedFirstnames;
      this.firstnames.sort((n1, n2) => n1.name.localeCompare(n2.name));
      this.dataLoaded.emit({ok: true, errorMessage: null});
    }
  }

  isInitialized() {
    return !!this.firstnames;
  }

  loadFirstnamesFromNetwork(url: string) {
    const result = new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(
          // success
          (data: any) => {
            const firstnamesFromNetwork = data.map((firstname) => {
              return new Firstname(firstname.name, firstname.gender, false, this.normalize(firstname.name));
            });
            resolve(firstnamesFromNetwork);
          },
          // error
          (error) => {
            reject(error);
          });
    });
    return result;
  }

  getFirstnamesFromLocalStorage() {
    const firstnamesJson = localStorage.getItem(this.localStorageFirstnamesKey);
    let firstnamesFromLocalStorage = [];
    if (!!firstnamesJson) {
      firstnamesFromLocalStorage = JSON.parse(firstnamesJson).map((firstname) => {
        return new Firstname(firstname.name, firstname.gender, firstname.like, this.normalize(firstname.name));
      });
    }
    return firstnamesFromLocalStorage;
  }

  normalize(s) {
    if (s.normalize != undefined) {
        s = s.normalize ('NFKD');
    }
    return s.replace (/[\u0300-\u036F]/g, '').toLowerCase();
  }

  mergeFirstnames(loadedFirstnames: Firstname[], savedFirstnames: Firstname[], hasNewVersion: boolean) {
    const map = new Map<string, Firstname>();

    loadedFirstnames.forEach((firstname) => {
      const key = firstname.name + '-' + firstname.gender;
      map.set(key, firstname);
    });

    savedFirstnames.forEach((firstname) => {
      if (firstname.like === true) {
        const key = firstname.name + '-' + firstname.gender;
        map.set(key, firstname);
      }
    });

    const result = new Array<Firstname>();
    map.forEach((value, key) => result.push(value));

    result.sort((n1, n2) => n1.name.localeCompare(n2.name));
    return result;
  }

  updateLike(updatedFirstname) {
    const index = this.firstnames.findIndex((firstname) =>
      firstname.name === updatedFirstname.name &&
      firstname.gender === updatedFirstname.gender);
    if (index === -1) {
      this.firstnames.push(updatedFirstname);
    } else {
      this.firstnames[index].like = updatedFirstname.like;
    }
    this.saveFirstnames(this.firstnames);
  }

  saveFirstnames(firstnames: Firstname[]) {
    localStorage.setItem(this.localStorageUrlKey, this.firstnamesUrl);
    // TODO if no more space available, save only 'like' firstname, in that case remove key this.localStorageUrlKey
    let savedFirstnames = [];
    firstnames.forEach((firstname) => savedFirstnames.push({
      name: firstname.name,
      gender: firstname.gender,
      like: firstname.like
    }));
    localStorage.setItem(this.localStorageFirstnamesKey, JSON.stringify(savedFirstnames));
  }

  getDefaultCriterias() {
    const criteriasFromLocalStorage = localStorage.getItem(this.localStorageDefaultCriteriasKey);
    let result;
    if (!!criteriasFromLocalStorage) {
      result = JSON.parse(criteriasFromLocalStorage);
    } else {
      result =  {
        firstname: '',
        female: true,
        male: true,
        like: false
      };
    }
    return result;
  }

  search(criterias) {
    this.searching = true;
    this.searchStarted.emit();
    localStorage.setItem(this.localStorageDefaultCriteriasKey, JSON.stringify(criterias));

    // simulate an expensive call (for testing ui effect)
    const delayInMs = 500;
    setTimeout(() => this.emitSearchEnd(this.performSearch(criterias)), delayInMs);
  }

  performSearch(criterias) {
    let result;
    const nameCriteria = criterias.firstname.trim();
    if ((nameCriteria === '' || nameCriteria === '*') && !!criterias.female  && !!criterias.male  && !criterias.like) {
      result = this.firstnames.slice();
    } else {
      result = this.firstnames.filter((firstname) => {
        const isMatchingName = this.filterName(nameCriteria, firstname.search, firstname.name);
        const isMatchingLike = (!criterias.like || firstname.like);
        const isMatchingFemale = (criterias.female || firstname.gender !== 'female');
        const isMatchingMale = (criterias.male || firstname.gender !== 'male');
        const isMatchingMix = (criterias.female || criterias.male || firstname.gender !== 'mix');
        return isMatchingName && isMatchingLike && isMatchingFemale && isMatchingMale && isMatchingMix;
      });
    }
    return result;
  }

  filterName(nameCriteria: string, normalizedName: string, originalName: string) {
    // TODO return a function
    if (nameCriteria.startsWith('"') && nameCriteria.endsWith('"')) {
      let nameEqualsStrict = nameCriteria.substring(1);
      nameEqualsStrict = nameEqualsStrict.substring(0, nameEqualsStrict.length - 1);
      return nameEqualsStrict === originalName;
    } else {
      nameCriteria = this.normalize(nameCriteria);
      if (nameCriteria.indexOf('*') === -1) {
        return normalizedName.startsWith(nameCriteria);
      } else {
        nameCriteria = nameCriteria.replace(/\*/gi, '.*');
        return normalizedName.match('^' + nameCriteria);
      }
    }
  }

  emitSearchEnd(foundFirstnames: Firstname[]) {
    this.searchFinished.emit({foundFirstnames});
    this.searching = false;
  }

  isSearching() {
    return this.searching;
  }
}
