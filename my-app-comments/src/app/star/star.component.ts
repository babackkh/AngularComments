import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IComment } from '../Interface/icomment';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  starWidth: number;
  @Input() rating: number;

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
  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }




}
