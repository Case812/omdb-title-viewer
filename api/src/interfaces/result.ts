import { Movie } from "./movie";

export interface Result {
  Search: Movie[];
  totalResults: number;
  Response: "True" | "False";
}