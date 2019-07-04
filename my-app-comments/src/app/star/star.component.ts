import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { }
  hovered = false;

  ngOnInit() {
  }
  mouseOvered($event: any) {
    this.hovered = true;
    console.log(this.hovered);
  }
}
