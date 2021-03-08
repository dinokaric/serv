import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import noteRoute from "./routes/note.route.js";
import dontenv from 'dotenv';
import customErrorHandler from './middleware/customError.handler.js';
import appConfig from './config/app.config.js';

dontenv.config()
const {HTTP_PORT,ENVIROMENT} = process.env;
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

//TODO: Config should depend on enviroment, appConfig structure is not setup
// for that yet
app.use('/api', noteRoute(appConfig.controllers.noteController));
app.use(customErrorHandler(ENVIROMENT == "DEV"));

app.listen(HTTP_PORT, () => {
  console.log(`Listening at ${HTTP_PORT}`);
});

