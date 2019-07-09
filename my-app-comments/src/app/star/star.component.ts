import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IComment } from '../Interface/icomment';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  starWidth: number;
  rate: number;
  @Input() rating: number;
  c: IComment = {
    comment: '',
    like: 0,
    dislike: 0,
    numberOfReviews: 0,
    star: 0
  };

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }
  oneStar(c: IComment , rate: number) {
    this.c.numberOfReviews++;
    c.star += rate;
  }
  twoStar(c: IComment , rate: number) {
    this.c.numberOfReviews++;
    c.star += rate;
  }
  threeStar(c: IComment , rate: number) {
    this.c.numberOfReviews++;
    c.star += rate;
  }
  fourStar(c: IComment , rate: number) {
    this.c.numberOfReviews++;
    c.star += rate;
  }
  fiveStar(c: IComment , rate: number) {
    this.c.numberOfReviews++;
    c.star += rate;
  }



}
