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

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }
  starClicked(c: IComment) {
    c.numberOfReviews++;
  }

}
