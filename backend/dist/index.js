"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const post_route_1 = __importDefault(require("./routes/post_route"));
const user_route_1 = __importDefault(require("./routes/user_route"));
const auth_route_1 = __importDefault(require("./routes/auth_route"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('./config/passport');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
// app.use(passport.session());
const port = process.env.PORT;
app.get("/", (_req, res) => {
    res.json({ country: 'USA' });
});
mongoose_1.default.connect(`${process.env.MONGO_URL}`, {
//useNewUrlParser: true
//useUnifiedTopology: true
}, err => {
    if (!err) {
        console.log('Database Connection Successful...');
    }
    else {
        console.log('Error in connection' + err);
    }
});
app.use('/api/users', passport_1.default.authenticate('jwt', { session: false }), user_route_1.default);
app.use('/api/post', passport_1.default.authenticate('jwt', { session: false }), post_route_1.default);
app.use('/api', auth_route_1.default);
app.listen(port, () => {
    console.log(`[server]:Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=index.js.map