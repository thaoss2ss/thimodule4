

import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import router from "./routers/employee.router";



const PORT = 8080;

const app = express();

app.set("view engine", "ejs");

app.set('views', './src/views');

const DB_URL = 'mongodb://localhost:27017/exam4';

mongoose.connect(DB_URL)

    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());

app.use('/employee',router)


app.listen(PORT, () => {

    console.log("App running on http://localhost:" + PORT)

})