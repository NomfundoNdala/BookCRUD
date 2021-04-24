import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  getId: any;
  updateForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    //gets book functiin from service
    this.crudService.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        title: res['name'],
        author: res['author'],
        description: res['description'],
        urlImage: res['urlImage']
      });
    });

    //formbuilder
    this.updateForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: [''],
      urlImage: ['']
    });
   }

  ngOnInit(): void {
  }


  //updates book
  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
