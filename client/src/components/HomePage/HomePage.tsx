import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { MoviesGrid } from "../MoviesGrid/MoviesGrid"
import "./HomePage.css";
import { Categories } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { setCategory } from "../../stores/rootStore";

const setButtonColor = (
  selectedCategory: Categories,
  buttonCategory: Categories): 'secondary' | 'inherit' => {
  return selectedCategory === buttonCategory ? 'secondary' : 'inherit'
}

const setButtonVariant = (
  selectedCategory: Categories,
  buttonCategory: Categories): 'contained' | 'text' => {
  return selectedCategory === buttonCategory ? 'contained' : 'text'
}

const setCategoryOnClick = (category: Categories, dispatch: Dispatch) => {
  dispatch(setCategory({ category }));
}

const HomeToolbar = ({
  selectedCategory,
  dispatch }: {
    selectedCategory: Categories,
    dispatch: Dispatch
  }) => (
  <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          </IconButton>
          <Button
            variant={setButtonVariant(selectedCategory, 'BUTTON1')}
            color={setButtonColor(selectedCategory, 'BUTTON1')}
            onClick={() => setCategoryOnClick('BUTTON1', dispatch)}
            sx={{ flexGrow: 1 }}>
            Button 1
          </Button>
          <Button
            variant={setButtonVariant(selectedCategory, 'BUTTON2')}
            color={setButtonColor(selectedCategory, 'BUTTON2')}
            onClick={() => setCategoryOnClick('BUTTON2', dispatch)}
            sx={{ flexGrow: 1 }}>
            Button 2
          </Button>
          <Button
            variant={setButtonVariant(selectedCategory, 'BUTTON3')}
            color={setButtonColor(selectedCategory, 'BUTTON3')}
            onClick={() => setCategoryOnClick('BUTTON3', dispatch)}
            sx={{ flexGrow: 1 }}>
            Button 3
          </Button>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1 }}
          ></IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  </div>
);

export const HomePage = () => {
  const category: Categories = useSelector((state: any) => state.reducer.category);
  const dispatch = useDispatch();

  return (
    <div className="home-div">
      <HomeToolbar 
        selectedCategory={category} 
        dispatch={dispatch}></HomeToolbar>
      <MoviesGrid selectedCategory={category}></MoviesGrid>
    </div>
  )
}