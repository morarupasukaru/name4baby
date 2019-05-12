import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(JSON.stringify(submittedForm.value));
  }
}
