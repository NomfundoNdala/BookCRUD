import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', component: AllBooksComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'editBook/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
