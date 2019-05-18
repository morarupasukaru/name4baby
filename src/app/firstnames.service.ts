import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firstname } from './firstname';

@Injectable()
export class FirstnamesService {

  localStorageUrlKey = 'firstnamesUrl';
  localStorageFirstnamesKey = 'firstnames';
  localStorageDefaultCriteriasKey = 'search-criterias';

  firstnamesUrl = 'assets/firstnames_v1.json';
  firstnames: Firstname[];

  constructor(private http: HttpClient) { }

  fetchFirstnames() {
    const savedFirstnames = this.getFirstnamesFromLocalStorage();
    const firstnamesUrlInLocalStorage = localStorage.getItem(this.localStorageUrlKey);
    const hasNewVersion = this.firstnamesUrl !== firstnamesUrlInLocalStorage;
    if (!savedFirstnames || hasNewVersion) {
      const promise = this.loadFirstnamesFromNetwork(this.firstnamesUrl);
      promise.then((loadedFirstnames: Firstname[]) => {
        const consolidatedFirstname = this.mergeFirstnames(loadedFirstnames, savedFirstnames, hasNewVersion);
        this.saveFirstnames(consolidatedFirstname, this.firstnamesUrl);

      }, (error) => {
        console.log('got error:' + JSON.stringify(error));
      });
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

  saveFirstnames(firstnames: Firstname[], url: string) {
    localStorage.setItem(this.localStorageUrlKey, url);
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
  }
}
