import { Component, OnInit } from '@angular/core';
import { FirstnamesService } from '../firstnames.service';

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
    this.female = defaultCriterias.female;
    this.male = defaultCriterias.male;
    this.like = defaultCriterias.like;
  }

  onSubmit(submittedForm) {
    this.firstnamesService.search({
      firstname: submittedForm.value.firstname,
      female: submittedForm.value.female,
      male: submittedForm.value.male,
      like: submittedForm.value.like,
    });
  }
}
