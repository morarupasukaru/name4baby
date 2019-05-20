import { Component, Input } from '@angular/core';
import { FirstnamesService } from '../firstnames.service';
import { Firstname } from '../firstname';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: []
})
export class ResultListComponent {

  @Input() firstnames: Firstname[];

  constructor(private firstnamesService: FirstnamesService) {
  }

  onToggle(firstname: Firstname) {
    firstname.like = !firstname.like;
    this.firstnamesService.updateLike(firstname);
  }
}
