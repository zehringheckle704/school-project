import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School Project';

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db.list('users').valueChanges().subscribe((data) => {
      console.log(data);
    });
  }
}
