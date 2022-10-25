import { Request, Response, NextFunction } from "express";
import Post from '../models/post.model';
import { validationResult } from 'express-validator';
import { IncomingHttpHeaders } from "http";

/**
 * get post service
 * @param _req
 * @param res
 * @param next
 */
export const getPostService = async (
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    try {
        var token = getToken(_req.headers);
        if ( token === token) {
            Post.find(function (err, posts) {
                if (err) return _next (err);
                res.json(posts);
            });
        } else {
            return res.status (403).send ({ success: false, msg: 'Unauthorized'})
        }
    } catch (err) {
        res.send("An error occured");
    }
};
function getToken(headers: IncomingHttpHeaders) {
    throw new Error("Function not implemented.");
};

/**
 * create post service
 * @param req 
 * @param res 
 * @param next 
 */

export const createPostService = async ( req: Request, res: Response, _next: NextFunction) => {
    try {
        const errors = validationResult(req.body);
        if(!errors.isEmpty()) {
            const error: any = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        const postList = req.body;
        const result: any = await Post.insertMany(postList);
        res
            .status(201)
            .json({ message: "Created Sucessfully!", data: result, status: 1 });
    } catch (err) {
        res.send("An error occured");
    }
};

export const findPostService = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    try {
        const post = await Post.findById(req.params.Id);
        if (!post) {
            const error: any = Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        res.json({ data: post, status:1 });
    } catch (err) {
        res
          .status(404)
          .json({ message: "Post not found!", status: 0});
    }
}

export const updatePostService = async (
    req: any,
    res: Response,
    _next: NextFunction
) => {
    try {
        const errors = validationResult(req.body);
        if(!errors.isEmpty()) {
            const error: any = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error; 
        }
        const post: any = await Post.findById(req.params.id);
        if(!post) {
            const error: any = new Error("Not Found!");
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

        const result = await post.save();
        res.json({ message: "Update Successfully!", data: result, status: 1 });
    } catch (err) {
        res.send("An error occured");
    }
};

export const deletePostService = async (
    req: any,
    res: Response,
    _next: NextFunction
) => {
    try {
        const post: any = await Post.findById(req.params.id);
        if(!post) {
            const error: any = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        post.deleted_at = new Date();
        await post.save();
        res.json({ message: "Deleted Successfully!", status: 1 });
    } catch (err) {
        res.send("An error occured");
    }
};
