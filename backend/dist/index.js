"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
require('./config/passport');
const auth_1 = __importDefault(require("./routes/auth"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
const port = process.env.PORT;
mongoose_1.default.connect('mongodb+srv://thiha:yth$4481@cluster0.brtiowx.mongodb.net/blog', {
// useNewUrlParser: true
// useUnifiedTopology: true
}, err => {
    if (!err) {
        console.log('Database connection successed');
    }
    else {
        console.log('Error in connection' + err);
    }
});
app.use('/api/auth', auth_1.default);
app.get('/', (req, res) => {
    res.send("/Hello World");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
