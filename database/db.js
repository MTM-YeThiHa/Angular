const mongoose = require("mongoose")
//, {
//     promiseLibrary: require('bluebird'),
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//     // useCreateIndex: true
// }).then(() => console.log('connection successful'))
//     .catch((err) => console.log(err));

module.exports = connection = async () => {
    try {
        const connectionParams = {
            promiseLibrary: require('bluebird'),
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await  mongoose.connect('mongodb+srv://thiha:yth$4481@cluster0.brtiowx.mongodb.net/articles');
        console.log("connected to database...");
    } catch (error) {
        console.log(error, "could not connect database.")
    }
};