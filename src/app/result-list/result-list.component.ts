import { Component, Input } from '@angular/core';
import { FirstnamesService } from '../firstnames.service';
import { Firstname } from '../firstname';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: []
})
export class ResultListComponent {

  firstnamesService: FirstnamesService;
  @Input() firstnames: Firstname[];

  constructor(firstnamesService: FirstnamesService) {
    this.firstnamesService = firstnamesService;
  }

  onToggle(firstname) {
    firstname.like = !firstname.like;
    this.firstnamesService.updateLike(firstname);
  }
}
