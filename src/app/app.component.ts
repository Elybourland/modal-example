import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private matDialog: MatDialog) {}

  ngOnInit() {
    if (localStorage.getItem('policy') !== 'true')
        this.matDialog.open(GreetingsComponent);
      }
    }
    
