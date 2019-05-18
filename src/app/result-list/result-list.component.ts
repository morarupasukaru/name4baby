import { Component, OnInit } from '@angular/core';
import { FirstnamesService } from '../firstnames.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  service: FirstnamesService;

  firstnames = [
    { name: 'Lidia', gender: 'female', like: false },
    { name: 'Lydia', gender: 'female', like: true },
    { name: 'Elodie', gender: 'female', like: true },
    { name: 'Amélie', gender: 'female', like: true },
    { name: 'Linda', gender: 'female', like: false },
    { name: 'Chloé', gender: 'female', like: false },
    { name: 'Lisa', gender: 'female', like: true },
    { name: 'Julie', gender: 'female', like: true },
    { name: 'Aline', gender: 'female', like: false },
    { name: 'Alycia', gender: 'female', like: false }
  ];

  constructor(service: FirstnamesService) {
    this.service = service;
  }

  ngOnInit() {
  }

  onToggle(firstname) {
    firstname.like = !firstname.like;
    this.service.updateLike(firstname);
  }
}
