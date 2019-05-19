import { Component, OnInit } from '@angular/core';
import { FirstnamesService, SearchResultEvent } from '../firstnames.service';
import { Firstname } from '../firstname';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  firstnamesService: FirstnamesService;

  searching = false;
  firstnames: Firstname[];

  constructor(firstnamesService: FirstnamesService) {
    this.firstnamesService = firstnamesService;
  }

  ngOnInit() {
    this.firstnamesService.onSearchStarted.subscribe({
      next: () => {
        this.searching = true;
      }
    });
    this.firstnamesService.onSearchEnd.subscribe({
      next: (event: SearchResultEvent) => {
        this.firstnames = event.foundFirstnames;
        this.searching = false;
      }
    });
    this.searching = this.firstnamesService.isSearching();
}

}
