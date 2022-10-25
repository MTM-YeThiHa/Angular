"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostService = exports.updatePostService = exports.findPostService = exports.createPostService = exports.getPostService = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const express_validator_1 = require("express-validator");
/**
 * get post service
 * @param _req
 * @param res
 * @param next
 */
const getPostService = (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var token = getToken(_req.headers);
        if (token === token) {
            post_model_1.default.find(function (err, posts) {
                if (err)
                    return _next(err);
                res.json(posts);
            });
        }
        else {
            return res.status(403).send({ success: false, msg: 'Unauthorized' });
        }
    }
    catch (err) {
        res.send("An error occured");
    }
});
exports.getPostService = getPostService;
function getToken(headers) {
    throw new Error("Function not implemented.");
}
;
/**
 * create post service
 * @param req
 * @param res
 * @param next
 */
const createPostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req.body);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        const postList = req.body;
        const result = yield post_model_1.default.insertMany(postList);
        res
            .status(201)
            .json({ message: "Created Sucessfully!", data: result, status: 1 });
    }
    catch (err) {
        res.send("An error occured");
    }
});
exports.createPostService = createPostService;
const findPostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findById(req.params.Id);
        if (!post) {
            const error = Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        res.json({ data: post, status: 1 });
    }
    catch (err) {
        res
            .status(404)
            .json({ message: "Post not found!", status: 0 });
    }
});
exports.findPostService = findPostService;
const updatePostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req.body);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        const post = yield post_model_1.default.findById(req.params.id);
        if (!post) {
            const error = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        post.id = req.body.id;
        post.postTitle = req.body.postTitle;
        post.postDesc = req.body.postDesc;
        post.postAuthor = req.body.postAuthor;
        post.postContent = req.body.postContent;
        post.postReference = req.body.postReference;
        post.created_user_id = req.body.created_user_id;
        post.updated_user_id = req.body.updated_user_id;
        const result = yield post.save();
        res.json({ message: "Update Successfully!", data: result, status: 1 });
    }
    catch (err) {
        res.send("An error occured");
    }
});
exports.updatePostService = updatePostService;
const deletePostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findById(req.params.id);
        if (!post) {
            const error = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        post.deleted_at = new Date();
        yield post.save();
        res.json({ message: "Deleted Successfully!", status: 1 });
    }
    catch (err) {
        res.send("An error occured");
    }
});
exports.deletePostService = deletePostService;
//# sourceMappingURL=post.service.js.map