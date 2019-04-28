import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent implements OnInit {

  selectedFile: File = null;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
  }

  registerBook(event: any) : void {
    if(this.selectedFile != null){
      console.log(this.selectedFile)
      console.log("Registering book in UploadBook component.")
      this.bookService.registerBook(this.selectedFile)
        .subscribe((data) => console.log(data))
    } else {
      console.log("You didn't select a file yet.")
    }
  }

  uploadFile(event: any): void {
      console.log("Set the selected file")
      this.selectedFile = event.target.files[0]
  }

}
