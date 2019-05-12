import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ResultInfoComponent } from './result-info/result-info.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultPaginationComponent } from './result-pagination/result-pagination.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLanguagesComponent } from './footer-languages/footer-languages.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { ResultLoadingComponent } from './result-loading/result-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    SearchComponent,
    ResultComponent,
    ResultInfoComponent,
    ResultListComponent,
    ResultPaginationComponent,
    FooterComponent,
    FooterLanguagesComponent,
    FooterInfoComponent,
    ResultLoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
