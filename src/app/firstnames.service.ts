import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firstname } from './firstname';
import { DebugRenderer2 } from '@angular/core/src/view/services';

export class DataLoadedEvent {
  errorMessage: string;
  ok: boolean;
}

@Injectable()
export class FirstnamesService {

  localStorageUrlKey = 'firstnamesUrl';
  localStorageFirstnamesKey = 'firstnames';
  localStorageDefaultCriteriasKey = 'search-criterias';

  firstnamesUrl = 'assets/firstnames_v1.json';
  firstnames: Firstname[];

  @Output() onDataLoaded: EventEmitter<DataLoadedEvent> = new EventEmitter();

  constructor(private http: HttpClient) { }

  fetchFirstnames() {
    const savedFirstnames = this.getFirstnamesFromLocalStorage();
    const hasNewVersion = this.firstnamesUrl !== localStorage.getItem(this.localStorageUrlKey);
    if (!savedFirstnames || hasNewVersion) {
      const promise = this.loadFirstnamesFromNetwork(this.firstnamesUrl);
      promise.then((loadedFirstnames: Firstname[]) => {
        const consolidatedFirstnames = this.mergeFirstnames(loadedFirstnames, savedFirstnames, hasNewVersion);
        this.saveFirstnames(consolidatedFirstnames);
        this.firstnames = consolidatedFirstnames;
        this.onDataLoaded.emit({ok: true, errorMessage: null});
      }, (error) => {
        console.log('got error:' + JSON.stringify(error));
        // TODO i18n
        this.onDataLoaded.emit({ok: false, errorMessage: 'Application initialization failed: Firstnames cannot be loaded.'});
      });
    } else {
      this.firstnames = savedFirstnames;
      this.onDataLoaded.emit({ok: true, errorMessage: null});
    }

    // TODO inform that loading of data is done
  }

  loadFirstnamesFromNetwork(url: string) {
    const result = new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(
          // success
          (data: any) => {
            const firstnamesFromNetwork = data.map((firstname) => {
              return new Firstname(firstname.name, firstname.gender, false);
            });
            resolve(firstnamesFromNetwork);
          },
          // error
          (error) => {
            // TODO display error message
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
        return new Firstname(firstname.name, firstname.gender, firstname.like);
      });
    }
    return firstnamesFromLocalStorage;
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

  updateLike(updatedFirstname) {  // TODO Firstname class
    const index = this.firstnames.findIndex((firstname) =>
      firstname.name === updatedFirstname.name &&
      firstname.gender === updatedFirstname.gender);
    if (index === -1) {
      this.firstnames.push(updatedFirstname);
    } else {
      this.firstnames[index].like = updatedFirstname.like;
    }
    this.firstnames.sort((n1, n2) => n1.name.localeCompare(n2.name));
    this.saveFirstnames(this.firstnames);
  }

  saveFirstnames(firstnames: Firstname[]) {
    localStorage.setItem(this.localStorageUrlKey, localStorage.getItem(this.localStorageUrlKey));
    // TODO if no more space available, save only 'like' firstname, in that case remove key this.localStorageUrlKey
    localStorage.setItem(this.localStorageFirstnamesKey, JSON.stringify(firstnames));
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
    localStorage.setItem(this.localStorageDefaultCriteriasKey, JSON.stringify(criterias));
    // TODO implements search
  }
}
