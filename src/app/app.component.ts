import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCaElaBz3zU0kLor-Lg67xOAGAiXftbawA",
      authDomain: "booksapp-d9ba4.firebaseapp.com",
      databaseURL: "https://booksapp-d9ba4.firebaseio.com",
      projectId: "booksapp-d9ba4",
      storageBucket: "",
      messagingSenderId: "291217776014",
      appId: "1:291217776014:web:d4bf026e8d46bb151d98df"
    };
    firebase.initializeApp(firebaseConfig);

  }
}
