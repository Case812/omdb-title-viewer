import { MovieModel } from "../models/movie.model.js";
import { Movie } from "../interfaces/movie.js";
import sql from "../models/sql.js";
import { urls } from "../config/config.js";
import Categories from "../interfaces/categories.js";
import axios from "axios";
import { Result } from "../interfaces/result.js";

class MovieService {
  private moviesCacheMap: Map<string, Movie> = new Map();

  constructor() {
    this.onInit(urls.BUTTON1, 'BUTTON1');
    this.onInit(urls.BUTTON2, 'BUTTON2');
    this.onInit(urls.BUTTON3, 'BUTTON3');
  }

  async getAll(category: Categories): Promise<MovieModel[]> {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * from movie WHERE categories=?', [category], (error: any, response: any) => {
        if (error) {
          reject(error);
        }
        response?.forEach((movie: MovieModel) => {
          this.moviesCacheMap.set(movie.Title, movie);
        })
        resolve(response);
      });
    })
  }

  async findOne(id: number, category: Categories): Promise<MovieModel[]> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * from movie m where m.id= ? and m.categories = ?'`, 
      [id, category],
        (error: any, response: any) => {
          if (error) {
            reject(error);
          }
          if(response) {
            this.moviesCacheMap.set(response.Title, response);
          }
          resolve(response);
        });
    });
  }

  async findByTitle(title: string, category: Categories): Promise<MovieModel[]> {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * from movie m where m.title=? and m.categories=?`, [title, category],
        (error: any, response: any) => {
          if (error) {
            reject(error);
          }
          if(response) {
            this.moviesCacheMap.set(response.Title, response);
          }
          resolve(response);
        });
    });
  }

  async create(newMovie: Movie, category: Categories): Promise<MovieModel> {
    if (this.moviesCacheMap.has(newMovie.Title)) return;
    const result = await this.findByTitle(newMovie.Title, category);
    if (result?.length > 0) return;
    return new Promise((resolve, reject) => {
      sql.query(
        'INSERT INTO movie (Title, Year, imdbID, type, Poster, Categories) VALUES (?, ?, ?, ?, ?, ?)',
       [newMovie.Title, newMovie.Year, newMovie.imdbID, newMovie.Type, newMovie.Poster, category], 
       (error: any, response: any) => {
        if (error) {
          reject(error);
        }
        console.info(`added: ${newMovie.Title}`);
        resolve(response);

      });
    });
  }
  async update(updatedMovie: Movie, category: Categories): Promise<MovieModel> {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE movie SET ' +
        ' Title = ?, Year = ?, imdbID = ?,' +
        ' Type = ?, Poster = ? WHERE Id = ? and categories = ?',
        [
          updatedMovie.Title,
          updatedMovie.Year,
          updatedMovie.imdbID,
          updatedMovie.Type,
          updatedMovie.Poster,
          updatedMovie.Id,
          updatedMovie.Categories
        ], (error: any, response: any) => {
          if (error) {
            reject(error);
          }
          console.info(`updated: ${updatedMovie.Id} - ${updatedMovie.Title}`);
          resolve(response);
        });
    });
  }

  async delete(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      sql.query(`DELETE FROM movie m Where m.Id = ?`, [id], (error: any, response: any) => {
        if (error) {
          reject(error);
        }

        console.info(`deleted: ${id}`);
        resolve(response);
      });
    });
  }

  private async onInit(path: string, category: Categories) {
    await this.getAll(category);
    const result: Result = (await axios.get(path))?.data;
    result.Search.forEach((movie: Movie) => {
      if (this.moviesCacheMap.size > 0 && this.moviesCacheMap.get(movie.Title)) {
        return;
      }
      if(!movie?.Title) return;
      this.create(movie, category);
    });
  }
}
const movieService = new MovieService();
export default movieService;