import mongooseLib from 'mongoose';
import Books from "./seed_data/books.seeder";
import config from "./server/config";

mongooseLib.Promise = global.Promise;

// Export the mongoose lib
export const mongoose = mongooseLib;

// Export the mongodb url
export const mongoURL = config.db.host;

/*
  Seeders List
  ------
  order is important
*/
export const seedersList = {
  Books
};