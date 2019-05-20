import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirstnamesService, SearchResultEvent } from '../firstnames.service';
import { Firstname } from '../firstname';
import { PaginationService } from '../pagination.service';
import { PageChangedEvent } from '../result-pagination/result-pagination.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  firstnamesService: FirstnamesService;
  paginationService: PaginationService;

  searching = false;
  resultCount = 0;
  foundFirstnames: Firstname[];
  displayedFirstnames: Firstname[];
  displayPagination = false;
  subscriptions = [];

  constructor(firstnamesService: FirstnamesService, paginationService: PaginationService) {
    this.firstnamesService = firstnamesService;
    this.paginationService = paginationService;
  }

  ngOnInit() {
    this.subscriptions.push(this.firstnamesService.searchStarted.subscribe({
      next: () => {
        this.searching = true;
      }
    }));

    this.subscriptions.push(this.firstnamesService.searchFinished.subscribe({
      next: (event: SearchResultEvent) => {
        this.foundFirstnames = event.foundFirstnames;
        this.displayedFirstnames = this.paginationService.getPage(0, this.foundFirstnames);
        this.resultCount = event.foundFirstnames.length;
        this.displayPagination = this.paginationService.isPaginationDisplayed(this.resultCount);
        this.searching = false;
      }
    }));

    this.searching = this.firstnamesService.isSearching();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe() );
  }

  onPageChanged(pageChanged: PageChangedEvent) {
    this.displayedFirstnames = this.paginationService.getPage(pageChanged.selectedPage, this.foundFirstnames);
  }
}
