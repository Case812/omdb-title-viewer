import { combineReducers } from "redux";
import {PayloadAction, configureStore, createSlice} from  "@reduxjs/toolkit";
import { Categories } from "../interfaces";

const initialState: {category: Categories} = {
  category: 'BUTTON1'
};
const rootSlice = createSlice({
  initialState,
  name: 'rootSlice',
  reducers: {
    setCategory: (state, action: PayloadAction<{category: Categories}>) => {
      state.category = action.payload.category;
    }
  }
})
export const mergedReducer = combineReducers({
  reducer: rootSlice.reducer
});

export const store = configureStore({
  reducer: mergedReducer,
  devTools: true
})
export const { setCategory } = rootSlice.actions;