import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: []
})
export class JumbotronComponent {
  @Input() loading: boolean;
}
