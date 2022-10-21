import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { logger } from '../logger/logger';
import Category from '../models/category.model';

/**
 * get movie service.
 * @param _req 
 * @param res 
 * @param next 
 */
 export const getMovieService = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const catagories: any = await Category.find();

        if(!catagories) {
            res.json({
                success: false,
                message: "Not Found!",
            });
            logger.error("Category not found");
        }
        res.json({
            success: true,
            message: "Category fetched",
            catagories: catagories,
            status: 1,
        });
        logger.info("Successfully fetched categories");
    } catch (err) {
        next(err);
        logger.error("Error fetching categories");
    }
  }