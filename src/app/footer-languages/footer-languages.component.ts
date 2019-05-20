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

  constructor(private translate: TranslateService) {
    let defaultLanguage = localStorage.getItem(this.localStorageLangKey);
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
    localStorage.setItem(this.localStorageLangKey, language);
  }

  isCurrentLanguage(language: string) {
    return this.current === language;
  }
}
