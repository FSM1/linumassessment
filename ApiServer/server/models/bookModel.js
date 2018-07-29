import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookModel = new Schema({
    isbn: { type: String },
    title: { type: String },
    subtitle: { type: String },
    author: { type: String },
    published: { type: Date },
    publisher: { type: String },
    pages: { type: Number },
    quantitySold: { type: Number },
    price: { type: Number },
});

export default mongoose.model('books', bookModel);