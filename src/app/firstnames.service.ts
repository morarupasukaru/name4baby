import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstnamesService {

  constructor() { }

  getDefaultCriterias() {
    // TODO from localStorage
    return {
      firstname: '',
      female: true,
      male: true,
      like: false
    };
  }

  search(criterias) {
    console.log(JSON.stringify(criterias));
  }
}
