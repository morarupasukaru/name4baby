import { Component, OnInit, Input } from '@angular/core';
import { FirstnamesService, SearchResultEvent } from '../firstnames.service';
import { PaginationService, PageChangedEvent } from '../pagination.service';
import { Firstname, Gender } from '../firstname';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  firstnamesService: FirstnamesService;
  paginationService: PaginationService;

  firstnames: Firstname[];
  displayedFirstnames: Firstname[];
  selectedPage: number;

  constructor(firstnamesService: FirstnamesService, paginationService: PaginationService) {
    this.firstnamesService = firstnamesService;
    this.paginationService = paginationService;
  }

  ngOnInit() {
    this.firstnamesService.searchStarted.subscribe({
      next: () => {
        this.firstnames = [];
      }
    });
    this.firstnamesService.searchFinished.subscribe({
      next: (event: SearchResultEvent) => {
        this.firstnames = event.foundFirstnames;
        this.updateResult();
      }
    });

    this.paginationService.pageChanged.subscribe({
      next: (event: PageChangedEvent) => {
        this.selectedPage = event.selectedPage;
        this.updateResult();
      }
    });
  }

  updateResult() {
    if (!!this.firstnames && !!this.selectedPage) {
      this.displayedFirstnames.splice(0, this.displayedFirstnames.length);
      const pageFirstnames = this.paginationService.getPage(this.selectedPage, this.firstnames);
      pageFirstnames.forEach((firstname) => this.displayedFirstnames.push(firstname));
      console.log(this.displayedFirstnames);
    }
  }

  onToggle(firstname) {
    firstname.like = !firstname.like;
    this.firstnamesService.updateLike(firstname);
  }
}
