import { Component, OnInit } from '@angular/core';
import { FirstnamesService, DataLoadedEvent } from './firstnames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = true;
  error = null;

  constructor(private firstnamesService: FirstnamesService) {
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
