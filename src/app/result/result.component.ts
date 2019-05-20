import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirstnamesService, SearchResultEvent } from '../firstnames.service';
import { Firstname } from '../firstname';
import { PaginationService } from '../pagination.service';
import { PageChangedEvent } from '../result-pagination/result-pagination.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: []
})
export class ResultComponent implements OnInit, OnDestroy {

  searching = false;
  resultCount = 0;
  foundFirstnames: Firstname[];
  displayedFirstnames: Firstname[];
  displayPagination: boolean;
  subscriptions: Subscription[];
  selectedPage: number;

  constructor(private firstnamesService: FirstnamesService, private paginationService: PaginationService) {
  }

  ngOnInit() {
    this.selectedPage = null;
    this.foundFirstnames = null;
    this.displayedFirstnames = null;
    this.displayPagination = false;
    this.searching = false;
    this.subscriptions = [];

    this.subscriptions.push(this.firstnamesService.searchStarted.subscribe({
      next: () => {
        this.searching = true;
      }
    }));

    this.subscriptions.push(this.firstnamesService.searchFinished.subscribe({
      next: (event: SearchResultEvent) => {
        this.foundFirstnames = event.foundFirstnames;
        this.displayPage(1, true);
        setTimeout(() => {
          this.resultCount = event.foundFirstnames.length;
          this.displayPagination = this.paginationService.isPaginationDisplayed(this.resultCount);
          this.searching = false;
        });
      }
    }));

    this.searching = this.firstnamesService.isSearching();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  onPageChanged(pageChanged: PageChangedEvent) {
    this.displayPage(pageChanged.selectedPage, false);
  }

  displayPage(selectedPage, forceReload) {
    if (forceReload || this.selectedPage !== selectedPage) {
      setTimeout(() => {
        if (!!this.foundFirstnames) {
          this.displayedFirstnames = this.paginationService.getPage(selectedPage, this.foundFirstnames);
        }
      });
      this.selectedPage = selectedPage;
      }
  }
}
