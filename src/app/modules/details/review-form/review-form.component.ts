import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  reviewForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
        body: ['', [Validators.required, Validators.minLength(30)]],
    });
  }

  get f() { return this.reviewForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.reviewForm.invalid) {
      return;
    }

    this.submitted = false;
    this.reviewForm.reset('')

  }

}
