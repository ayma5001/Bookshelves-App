import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
var firebaseConfig = {
  apiKey: "AIzaSyCoN74IC6wY0rqmASa-e3oPuhSSLUSG0Oo",
  authDomain: "bookshelves-576ed.firebaseapp.com",
  databaseURL: "https://bookshelves-576ed.firebaseio.com",
  projectId: "bookshelves-576ed",
  storageBucket: "bookshelves-576ed.appspot.com",
  messagingSenderId: "916166663662",
  appId: "1:916166663662:web:69ce1c1b857495b0bc02ff",
  measurementId: "G-MLT1MXM8VC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
}
}
