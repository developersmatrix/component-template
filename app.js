import express, { json, urlencoded } from "express";
import morgan from "morgan";

//  utilities
import cors from "./components/Utilities/cors.js";
import dbConnection from "./components/Utilities/dbConnection.js";
import { customError, serverError } from "./components/Utilities/errors.js";

//  Routes
import ptaxRouter from './components/dcb/propertyTax/ptaxRoutes.js';

// // routes
const app = express();

// // for logging information during development
app.use(morgan("dev"));

// // connect to database
dbConnection();

app.use(json({ extended: true }));
app.use(urlencoded({ extended: true }));

// // Prevent CORS(Cross Origin Resource Sharing) error
app.use(cors);

// // routes
app.use("/dcb/propertytax", ptaxRouter);

// // error handling
app.use(customError);
app.use(serverError);

export default app;
