import mongooseLib from 'mongoose';
import Books from "./seed_data/books.seeder";

mongooseLib.Promise = global.Promise;

// Export the mongoose lib
export const mongoose = mongooseLib;

// Export the mongodb url
export const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/bookpublisher';

/*
  Seeders List
  ------
  order is important
*/
export const seedersList = {
  Books
};
