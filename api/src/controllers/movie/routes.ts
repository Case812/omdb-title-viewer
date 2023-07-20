import express from "express";
import MovieController from "./movie.controller.js";

const moviesRouter = express.Router();
moviesRouter.get('/:category', MovieController.getAll);
moviesRouter.get('/:category/:id', MovieController.findOne);
moviesRouter.post('/:category', MovieController.create);
moviesRouter.put('/:category', MovieController.update);
moviesRouter.delete('/:category/:id', MovieController.delete);
export default moviesRouter;