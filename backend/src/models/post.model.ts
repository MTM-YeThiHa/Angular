import { binary } from "joi";
import mongoose, { model, Schema } from "mongoose";

const postSchema = new Schema ({
    id: {
        type:String,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postAuthor: {
        type: String,
        required: true
    },
    postDesc: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    postReference: {
        type: String,
        required: true
    },
    postImgUrl: {
        type: binary,
        required: true
    },
    created_user_id: {
        type: Schema.Types.ObjectId
    },
    updated_user_id: {
        type: Schema.Types.ObjectId
    },
},
{
    timestamps: true
}
);

export default model("Post", postSchema);


// var mongoose = require('mongoose'), Schema = mongoose.Schema;

// var PostSchema = new mongoose.Schema({
//     category: { type: Schema.Types.ObjectId, ref: 'Category' },
//     id: String,
//     postTitle: String,
//     postAuthor: String,
//     postDesc: String,
//     postContent: String,
//     postReference: String,
//     postImgUrl: String,
//     created: { type: Date },
//     updated: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Post', PostSchema);

