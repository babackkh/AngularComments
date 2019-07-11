import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  starWidth: number;
  reviewCount = 0;
  sum = 0;

  constructor() { }

  ngOnInit() {
  }
  starClicked(rate: number) {
    this.reviewCount++;
    this.sum = this.sum += rate;
    this.starWidth = ( this.sum / this.reviewCount) * 90 / 5;
  }




}
