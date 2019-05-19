import { Component, OnInit } from '@angular/core';
import { FirstnamesService, DataLoadedEvent } from '../firstnames.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  firstname = '';
  female = false;
  male = false;
  like = false;
  workInProgress = false;
  firstnamesService: FirstnamesService;

  constructor(firstnamesService: FirstnamesService) {
    this.firstnamesService = firstnamesService;
  }

  ngOnInit() {
    const defaultCriterias = this.firstnamesService.getDefaultCriterias();
    this.firstname = defaultCriterias.firstname;
    this.female = defaultCriterias.female;
    this.male = defaultCriterias.male;
    this.like = defaultCriterias.like;

    const criteria = {
      firstname: this.firstname,
      female: this.female,
      male: this.male,
      like: this.like
    };

    if (this.firstnamesService.isInitialized()) {
      this.search(criteria);
    } else {
      this.firstnamesService.dataLoaded.subscribe({
          next: (event: DataLoadedEvent) => {
            if (!!event.ok) {
              this.search(criteria);
            }
          }
      });
    }

    this.firstnamesService.searchStarted.subscribe({
      next: () => {
        this.workInProgress = true;
      }
    });
    this.firstnamesService.searchFinished.subscribe({
      next: () => {
        this.workInProgress = false;
      }
    });
    this.workInProgress = this.firstnamesService.isSearching();
  }

  onSubmit(submittedForm) {
    this.search({
      firstname: submittedForm.value.firstname,
      female: submittedForm.value.female,
      male: submittedForm.value.male,
      like: submittedForm.value.like
    });
  }

  search(criteria) {
    this.workInProgress = true;
    this.firstnamesService.search(criteria);
  }
}
