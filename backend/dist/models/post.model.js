"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    },
    id: {
        type: String,
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
        type: String,
        required: true
    },
    created_user_id: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    updated_user_id: {
        type: mongoose_1.Schema.Types.ObjectId
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Post", postSchema);
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
//# sourceMappingURL=post.model.js.map