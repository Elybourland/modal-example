import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private matDialog: MatDialog) {

  }

  // onOpenDialogClick() {
  //   this.matDialog.open(GreetingsComponent);
  // }

  ngOnInit() {
    this.matDialog.open(GreetingsComponent);
  }

}
