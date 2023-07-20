import express from "express";
import movieRouter from "./controllers/movie/routes.js";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());
app.use('/api/movie', movieRouter);
app.listen(port, () => {
  console.log(`server started on: ${port}`);
});
export default app;