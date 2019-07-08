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
  oneStar() {
    this.starClicked(this.c);
    return 1;
  }
  twoStar() {
    return 2;
  }
  threeStar() {
    return 3;
  }
  fourStar() {
    return 4;
  }
  fiveStar() {
    this.starClicked(this.c);
    return 5;
  }
  starClicked(c: IComment) {
    this.c.numberOfReviews++;
    console.log(c.numberOfReviews);
  }


}
