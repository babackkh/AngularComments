import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { IComment } from '../Interface/icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  commentBoxArray = [];
  commentShow = false;
  commentText: IComment = Comment;
  @ViewChild('textAreaRef' , {static: true}) textAreaInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  submitClicked() {
    this.commentBoxArray.push('test');
    this.commentShow = true;
    // this.textAreaInput = commentInput.value;
    this.commentText = this.textAreaInput.nativeElement.value;
    console.log(this.commentText);
  }


}
