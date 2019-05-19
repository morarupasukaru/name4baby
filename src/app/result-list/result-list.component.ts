import { Component, OnInit, Input } from '@angular/core';
import { FirstnamesService } from '../firstnames.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  service: FirstnamesService;

  @Input() firstnames;

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
