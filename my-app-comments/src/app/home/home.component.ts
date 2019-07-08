import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { IComment } from '../Interface/icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: IComment[] = [];
  @ViewChild('textAreaRef' , {static: true}) commentTextValue: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  addComment() {
    let c: IComment = {
      comment: this.commentTextValue.nativeElement.value,
      like: 0,
      dislike: 0,
      numberOfReviews: 0,
      star: 0
    };
    this.comments.push(c);
  }
  likeClicked(c: IComment) {
    c.like++;
    console.log(c.like);
  }
  dislikeClicked(c: IComment) {
    c.dislike++;
  }



}
