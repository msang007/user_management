import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import mysql from "mysql";
import dotenv from "dotenv";
import router from "./server/routes/user.js";
const ENV = dotenv.config().parsed;
/*
import { config } from 'dotenv';
const result = config();
*/
//require("dotenv").config();

const app = express();
const port = process.env.Port || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.static('public'));

app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine','hbs');


app.use("/", router),


app.listen(port,()=> console.log(`listening on port ${port}`));