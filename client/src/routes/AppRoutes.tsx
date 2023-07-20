import {Route, Routes} from "react-router-dom";
import { HomePage } from "../components/HomePage/HomePage";
import { NoPageFound } from "../components/NoPageFound/NoPageFound";

export const AppRoutes = () =>  {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="*" element={<NoPageFound></NoPageFound>}></Route>
    </Routes>
  );
}