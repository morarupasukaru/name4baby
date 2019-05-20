import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirstnamesService, DataLoadedEvent } from '../firstnames.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  // TODO ExpressionChangedAfterItHasBeenCheckedError
  firstname = '';
  female = false;
  male = false;
  like = false;
  workInProgress = false;
  firstnamesService: FirstnamesService;
  subscriptions = [];

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

    // TODO avoid this? call search later
    if (this.firstnamesService.isInitialized()) {
      this.search(criteria);
    } else {
      this.subscriptions.push(this.firstnamesService.dataLoaded.subscribe({
          next: (event: DataLoadedEvent) => {
            if (!!event.ok) {
              this.search(criteria);
            }
          }
      }));
    }

    this.subscriptions.push(this.firstnamesService.searchStarted.subscribe({
      next: () => {
        this.workInProgress = true;
      }
    }));
    this.subscriptions.push(this.firstnamesService.searchFinished.subscribe({
      next: () => {
        this.workInProgress = false;
      }
    }));

    // TODO avoid call?
    this.workInProgress = this.firstnamesService.isSearching();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe() );
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
