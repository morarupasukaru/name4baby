import { Component, OnInit } from '@angular/core';
import { FirstnamesService, SearchResultEvent } from '../firstnames.service';
import { Firstname } from '../firstname';
import { PaginationService, PageChangedEvent } from '../pagination.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  firstnamesService: FirstnamesService;
  paginationService: PaginationService;

  searching = false;
  firstnames: Firstname[];
  displayedFirstnames: Firstname[];
  resultCount = 0;

  constructor(firstnamesService: FirstnamesService, paginationService: PaginationService) {
    this.firstnamesService = firstnamesService;
    this.paginationService = paginationService;
  }

  ngOnInit() {
    this.firstnamesService.searchStarted.subscribe({
      next: () => {
        this.searching = true;
      }
    });
    this.firstnamesService.searchFinished.subscribe({
      next: (event: SearchResultEvent) => {
        this.firstnames = event.foundFirstnames;
        this.resultCount = this.firstnames.length;
        this.searching = false;
//        this.displayedFirstnames = this.paginationService.getPage(0, this.firstnames);
      }
    });
    this.paginationService.pageChanged.subscribe({
      next: (event: PageChangedEvent) => {
        this.displayedFirstnames = this.paginationService.getPage(event.selectedPage, this.firstnames);
      }
    });
    this.searching = this.firstnamesService.isSearching();
  }
}
