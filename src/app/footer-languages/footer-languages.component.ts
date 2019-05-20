import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-languages',
  templateUrl: './footer-languages.component.html',
  styleUrls: []
})
export class FooterLanguagesComponent implements OnInit {

  current: string;

  constructor(private translate: TranslateService) {
    // TODO load default language
    let defaultLanguage = localStorage.getItem('language');
    if (!defaultLanguage) {
      defaultLanguage = 'en';
    }
    this.useLanguage(defaultLanguage);
  }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.current = language;
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  isCurrentLanguage(language: string) {
    return this.current === language;
  }
}
