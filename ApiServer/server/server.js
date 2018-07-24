import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRouter from './routes/bookRouter';
import config from './config';

const db = mongoose.connect(config.db.host);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/Books', bookRouter);
const port = config.app.port || 3001;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})