import { Component } from '@angular/core';
import { FirstnamesService, DataLoadedEvent } from './firstnames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstnamesService: FirstnamesService;
  loading = true;
  error = null;

  constructor (firstnamesService: FirstnamesService) {
    this.firstnamesService = firstnamesService;
  }

  ngOnInit() {
    this.firstnamesService.dataLoaded.subscribe(
      {
        next: (event: DataLoadedEvent) => {
          this.loading = false;
          if (!event.ok) {
            this.error = event.errorMessage;
          }
        }
    });
    this.firstnamesService.fetchFirstnames();
  }
}
