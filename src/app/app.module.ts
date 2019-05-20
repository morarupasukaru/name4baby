import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
import { FirstnamesService } from './firstnames.service';
import { PaginationService } from './pagination.service';

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
    HttpClientModule,
    FormsModule,
    // configure the imports
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })

  ],
  providers: [FirstnamesService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
      // trick to be able to use language translations on installed software on github page
      if (location.href.indexOf('localhost:4200') === -1) {
    return new TranslateHttpLoader(http, "/nowname/assets/i18n/", ".json");
  } else {
    return new TranslateHttpLoader(http);
  }
}
