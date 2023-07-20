import { DataGrid } from "@mui/x-data-grid";
import { getMovies, getMoviesGridColumns } from "../../utils/MoviesUtil";
import "./MoviesGrid.css";
import { useEffect, useState } from "react";
import { Categories} from "../../interfaces";

const onCategory = async (setRows: Function, category: Categories) => {
  const movies = await getMovies(category);
  setRows(movies);
}

export const MoviesGrid = ({ selectedCategory }: { selectedCategory: Categories }) => {
  const [rows, setRows] = useState([]);
  useEffect(() => { onCategory(setRows, selectedCategory) }, [selectedCategory]);
  const columns = getMoviesGridColumns();
  return <div className="movies-grid">
    <DataGrid rows={rows} columns={columns} getRowId={row => row.Id} />
  </div>;
}