import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }


  display(message: string, action: string = 'Dismiss', options: {} = { duration: 2000}) {
    this.snackbar.open(message, action, options);
  }
}
