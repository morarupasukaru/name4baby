import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/config';

@Injectable()
export class FirstnamesService {

  configUrl = 'assets/config.json';
  config: Config = null;

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.configUrl);
  }

  fetchFirstnames() {
    this.getConfig()
      .subscribe((data: Config) =>  {
        // TODO load firstnames
        console.log(JSON.stringify(data));
        this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      }
      }
      );
  }

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
