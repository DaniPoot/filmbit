import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/core/classes/review/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() review : Review; 

  constructor() {
    this.review = {  } as Review
  }

  ngOnInit(): void {
  }

}
