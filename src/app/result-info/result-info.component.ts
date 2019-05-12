import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-info',
  templateUrl: './result-info.component.html',
  styleUrls: ['./result-info.component.css']
})
export class ResultInfoComponent implements OnInit {

  resultCount = 10;

  constructor() { }

  ngOnInit() {
  }

}
