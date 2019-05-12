import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  firstnames = [
    { firstname: 'Lidia', like: false },
    { firstname: 'Lydia', like: true },
    { firstname: 'Elodie', like: true },
    { firstname: 'Amélie', like: true },
    { firstname: 'Linda', like: false },
    { firstname: 'Chloé', like: false },
    { firstname: 'Lisa', like: true },
    { firstname: 'Julie', like: true },
    { firstname: 'Aline', like: false },
    { firstname: 'Alycia', like: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  onToggle(firstname) {
    firstname.like = !firstname.like;
  }
}
