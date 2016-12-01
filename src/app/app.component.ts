import { Component } from '@angular/core';
import { Article } from './models/article'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
        'The greatest article ever written2',
        'A not so nice book',
        'Arthur D. Godblessed2'),
      new Article(
        'Maybe it is not so good',
        'This one either',
        'Arthur D. Godblessed'),
      new Article(
        'The worst article ever written',
        'A not so nice book',
        'Arthur D. Godblessed')
    ];

    // this.articles = [{
    //   title: 'The greatest article ever written',
    //   'Arthur D. Godblessed'
    // }, {
    //   title: 'The greatest article ever written',
    //   author: 'Arthur D. Godblessed'
    // }, {
    //   title: 'The greatest article ever written',
    //   author: 'Arthur D. Godblessed'
    // },  {
    //   title: 'The greatest article ever written',
    //   author: 'Arthur D. Godblessed'
    // }]
  }
}
