import { Avatar } from "@mui/material";
import { URL } from "../constants/constants";
import { getMovies, getMoviesGridColumns } from "./MoviesUtil";

describe('MoviesUtil', () => {
  it('should get the correct grid properties', () => {
    const expected = [
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
    const actual = getMoviesGridColumns();
    expect(JSON.stringify(expected)).toEqual(JSON.stringify(actual));
  });

  it('should fetch the correct url', () => {
    const baseUrl = URL;
    const completeUrl = baseUrl + `/api/movie/BUTTON1`;
    global.fetch = jest.fn().mockReturnValue({json: () => {}});
    getMovies('BUTTON1');

    expect(global.fetch).toHaveBeenCalledWith(completeUrl);
  });
});