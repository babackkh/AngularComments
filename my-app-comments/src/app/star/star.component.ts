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

  sum:number = 0;
  rate:number = 0;
  qnty:number = 0;
  _starWidth:number = 0;

  onStarClick(nr){
    // console.log(nr);
    this.qnty++;
    this.sum += nr;
    this.rate = this.sum / this.qnty;
    // console.log(this.qnty);
    // console.log(this.sum);
    // console.log(this.rate);

    this._starWidth = this.rate * 90 / 5;
    console.log(this._starWidth);
  }

  ngOnInit() {
  }
  starClicked(rate: number) {
    this.reviewCount++;
    this.sum = this.sum += rate;
    this.starWidth = ( this.sum / this.reviewCount) * 90 / 5;
  }




}
