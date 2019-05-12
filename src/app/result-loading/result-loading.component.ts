import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-loading',
  templateUrl: './result-loading.component.html',
  styleUrls: ['./result-loading.component.css']
})
export class ResultLoadingComponent implements OnInit {

  searching = false;

  constructor() { }

  ngOnInit() {
  }

}
