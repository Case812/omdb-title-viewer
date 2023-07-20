import mysql from "mysql";
import { sqlConfig } from "../config/config.js";

const connection = mysql.createPool(sqlConfig);

export default connection;