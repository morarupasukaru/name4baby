import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-info',
  templateUrl: './result-info.component.html',
  styleUrls: []
})
export class ResultInfoComponent implements OnInit {

  @Input() resultCount;

  constructor() { }

  ngOnInit() {
  }

}
