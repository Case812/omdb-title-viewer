import { GridColDef } from "@mui/x-data-grid";
import { Categories, Movie } from "../interfaces";
import { URL } from "../constants/constants";
import { Avatar } from "@mui/material";
export const getMoviesGridColumns = (): GridColDef[] => {
  return [
    {
      field: 'Poster',
      headerName: 'Poster',
      width: 100,
      renderCell: (params: any) => (<Avatar src={params.value} sx={{width: 45, height: 45}}></Avatar>)},
    { field: 'Title', headerName: 'Title', width: 300 },
    { field: 'Year', headerName: 'Year', width: 100 },
    { field: 'imdbID', headerName: 'imdbID', width: 150 },
    { field: 'Type', width: 100 }
  ];
}

export const getMovies = async (category: Categories): Promise<Movie[]> => {
  const data = await fetch(URL + `/api/movie/${category}`);
  return data.json();
}