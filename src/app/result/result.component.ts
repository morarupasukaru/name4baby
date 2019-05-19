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
        this.resultCount = event.foundFirstnames.length;
        this.searching = false;
      }
    });
    this.searching = this.firstnamesService.isSearching();
  }
}
