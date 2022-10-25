import express, { Express, Request, Response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import post_route from './routes/post_route';
import user_route from './routes/user_route';
import auth_route from './routes/auth_route';
import cors from 'cors';
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
require('./config/passport');
dotenv.config();

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
// app.use(passport.session());

const port = process.env.PORT;

app.get("/", (_req, res) => {
    res.json({ country: 'USA'});
})

mongoose.connect(`${process.env.MONGO_URL}`, {
    //useNewUrlParser: true
    //useUnifiedTopology: true
}, 
    err => {
        if(!err) {
            console.log('Database Connection Successful...');
        } else {
            console.log('Error in connection' + err);
        }
    });


app.use('/api/users', passport.authenticate('jwt', { session: false }), user_route);
app.use('/api/post', passport.authenticate('jwt', { session: false }), post_route);
app.use('/api', auth_route);

app.listen(port, () => {
    console.log(`[server]:Server is running at https://localhost:${port}`);
  })