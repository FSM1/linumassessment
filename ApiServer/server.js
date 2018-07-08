import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRouter from './Routes/bookRouter';

const db = mongoose.connect('mongodb://127.0.0.1/linumassessment');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/Books', bookRouter);
const port = process.env.port || 3001;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})