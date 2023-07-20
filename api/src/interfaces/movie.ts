import Categories from "./categories";

export interface Movie {
  Id?: number;
  Categories: Categories;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}