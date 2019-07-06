import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  hovered = false;

  constructor() { }

  ngOnInit() {
  }

}
