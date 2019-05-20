import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-languages',
  templateUrl: './footer-languages.component.html',
  styleUrls: []
})
export class FooterLanguagesComponent implements OnInit {

  current: string;
  localStorageLangKey = 'nowname.language';
  hrefLink: string;

  constructor(private translate: TranslateService) {
    let defaultLanguage = localStorage.getItem(this.localStorageLangKey);
    if (!defaultLanguage) {
      defaultLanguage = 'en';
    }
    if (location.href.indexOf('localhost:4200') === -1) {
      // trick to be able to use language link on installed software on github page
      this.hrefLink = 'https://morarupasukaru.github.io/nowname/#';
    } else {
      this.hrefLink = '#';
    }
    this.useLanguage(defaultLanguage);
  }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.current = language;
    this.translate.use(language);
    localStorage.setItem(this.localStorageLangKey, language);
  }

  isCurrentLanguage(language: string) {
    return this.current === language;
  }
}
