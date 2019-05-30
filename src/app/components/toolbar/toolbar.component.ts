import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  selectedFile: File = null;

  constructor(
    private bookService: BooksService,
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
  }

  login(event) {
    this.router.navigate(['login']);
  }

  logout(event) {
    this.bookService.logout();
  }

  isLoggedIn() {
    return this.bookService.isLoggedIn();
  }

  registerBook(): void {
    if (this.selectedFile != null) {
      console.log(this.selectedFile);
      console.log('Registering book in UploadBook component.');
      this.bookService.registerBook(this.selectedFile)
        .subscribe(
          (results) => {
            // Get first non empty response
            for (const entry of results.filter(Boolean)) {
              if (entry && entry.book && entry.book.title) {
                this.snackbarService.display(`Added ${entry.book.title} to the book list!`, 'Dismiss', {duration: 3000});
                break;
              }
            }

        });
    } else {
      console.log('You didn\'t select a file yet.');
    }
  }

  uploadFile(event: any): void {
    console.log('Set the selected file');
    this.selectedFile = event.target.files[0];
    this.registerBook();
  }

  selectFile(event: any): void {
    document.getElementById('inputFile').click();
  }

}
