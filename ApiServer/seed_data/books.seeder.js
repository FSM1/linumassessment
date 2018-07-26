import { Seeder } from 'mongoose-data-seed';
import bookModel from '../server/models/bookModel';

const data = [
  {
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "subtitle": "A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "published": "2014-12-14T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 472,
    "quantitySold": 0,
    "price": 150,   
  },
  {
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "author": "Addy Osmani",
    "published": "2012-07-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "quantitySold": 0,
    "price": 250,
  },
  {
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "author": "Axel Rauschmayer",
    "published": "2014-02-01T00:00:00.000Z",
    "publisher": "O'Reilly Media",
    "pages": 460,
    "quantitySold": 0,
    "price": 360,
  },
  {
    "isbn": "9781593277574",
    "title": "Understanding ECMAScript 6",
    "subtitle": "The Definitive Guide for JavaScript Developers",
    "author": "Nicholas C. Zakas",
    "published": "2014-12-14T00:00:00.000Z",
    "publisher": "No Starch Press",
    "pages": 352,    
    "quantitySold": 0,
    "price": 280,
  }
];

class BooksSeeder extends Seeder {

  async shouldRun() {
    return bookModel.count().exec().then(count => count === 0);
  }

  async run() {
    return bookModel.create(data);
  }
}

export default BooksSeeder;
