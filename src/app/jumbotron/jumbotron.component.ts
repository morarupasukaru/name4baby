import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: []
})
export class JumbotronComponent implements OnInit {
  @Input() loading;

  constructor() { }

  ngOnInit() {
  }

}
