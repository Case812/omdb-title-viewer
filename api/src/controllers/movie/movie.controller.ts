import { RequestHandler } from "express";
import MovieService from "../../services/movie.service.js";

class MovieController {
  getAll: RequestHandler = async (request, response, next) => {
    try {
      const category = request.params.category;
      const movies = await MovieService.getAll(category as any);
      response.status(200).json(movies);
    } catch(e: any) {
      next(e);
    }
  }
  findOne: RequestHandler = async (request, response, next) => {
    try{
      const category = request.params.category;
      const id = request.params.id;
      const movie = await MovieService.findOne(Number(id), category as any);
      response.status(200).json(movie);
    } catch(e: any) {
      next(e);
    }
  }
  create: RequestHandler = async(request, response, next) => {
    try {
      const category = request.params.category;
      const newMovie = JSON.parse(request.params.body);
      const createdMovie = await MovieService.create(newMovie, category as any);
      response.status(200).json(createdMovie);
    } catch(e: any) {
      next(e);
    }
  }
  update: RequestHandler = async(request, response, next) => {
    try {
      const category = request.params.category;
      const movieToUpdate = JSON.parse(request.params.body);
      const updatedMovie = await MovieService.update(movieToUpdate, category as any);
      response.status(200).json(updatedMovie);
    } catch(e: any) {
      next(e);
    }
  }
  delete: RequestHandler = async(request, response, next) => {
    try {
      const id = request.params.id;
      await MovieService.delete(Number(id));
    } catch(e: any) {
      next(e);
    }
  }
}
const controller = new MovieController();
export default controller;