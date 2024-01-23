import { Express } from "express";
import axios from 'axios';

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        message: "Hello Kittens",
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});