import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  submitted = false;
  bookForm: FormGroup;
  error = '';
  success = ''

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {  
    this.bookForm = this.formBuilder.group({
    title: [ '', Validators.required ],
    author: ['', Validators.required],
    description: ['', Validators.required],
    urlImage :['', Validators.required]
  });
}


  ngOnInit(): void {}

  get f() { return this.bookForm.controls; }
  
    onSubmit(): any {
      this.submitted = true;
    this.crudService.AddBook(this.bookForm.value)
    .subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/books')
  });
  this.router.navigateByUrl('/books')
  }

  
  
}
