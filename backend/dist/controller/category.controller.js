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
exports.getMovieService = void 0;
const logger_1 = require("../logger/logger");
const category_model_1 = __importDefault(require("../models/category.model"));
/**
 * get movie service.
 * @param _req
 * @param res
 * @param next
 */
const getMovieService = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const catagories = yield category_model_1.default.find();
        if (!catagories) {
            res.json({
                success: false,
                message: "Not Found!",
            });
            logger_1.logger.error("Category not found");
        }
        res.json({
            success: true,
            message: "Category fetched",
            catagories: catagories,
            status: 1,
        });
        logger_1.logger.info("Successfully fetched categories");
    }
    catch (err) {
        next(err);
        logger_1.logger.error("Error fetching categories");
    }
});
exports.getMovieService = getMovieService;
//# sourceMappingURL=category.controller.js.map