import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import {dependencies} from '../config/dependencies'
import {addProduct} from "../infrastructure/routes/addProduct"


dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT) || 3002;

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(addProduct(dependencies))

// Error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`product service is running on port ${port}`);
});

export default app;
