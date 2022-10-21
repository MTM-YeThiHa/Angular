import express, { Express, Request, Response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import passport from "passport";
import path from "path";
import { appendFile } from "fs";
require('./config/passport');

import authRoute from "./routes/auth";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT;

mongoose.connect('mongodb+srv://thiha:yth$4481@cluster0.brtiowx.mongodb.net/blog', {
    // useNewUrlParser: true
    // useUnifiedTopology: true
},
 err => {
    if (!err) {
        console.log('Database connection successed');
    } else {
        console.log('Error in connection' + err);
    }
 }
);


app.use('/api/auth', authRoute);

app.get('/', (req: Request, res: Response) => {
    res.send("/Hello World");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
})