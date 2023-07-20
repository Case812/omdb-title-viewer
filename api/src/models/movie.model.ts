import { rejects } from "assert";
import { Movie } from "../interfaces/movie"
import Categories from "../interfaces/categories";
export class MovieModel implements Movie {
  Id: number;
  Categories: Categories;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  constructor(movie: Movie) {
    this.Id = movie?.Id;
    this.Categories = movie.Categories;
    this.Title = movie.Title;
    this.Year = movie.Year;
    this.imdbID = movie.imdbID;
    this.Type = movie.Type;
    this.Poster = movie.Poster;
  }
}