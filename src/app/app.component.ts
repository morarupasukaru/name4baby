import { Component } from '@angular/core';
import { FirstnamesService } from './firstnames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstnamesService: FirstnamesService;

  constructor (firstnamesService: FirstnamesService) {
    this.firstnamesService = firstnamesService;
  }

  ngOnInit() {
    this.firstnamesService.fetchFirstnames();
  }
}
