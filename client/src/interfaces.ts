export interface Movie {
  Id?: number;
  Categories: Categories;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type Categories = 'BUTTON1' | 'BUTTON2' | 'BUTTON3';