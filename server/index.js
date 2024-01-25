import { Express } from "express";
import axios from 'axios';

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const http = require("http").Server(app);
const cors = require("cors");
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});
app.use(cors());

socketIO.on('connection',(socket) =>{
    console.log(` ${socket.id} just connected`);
    socket.on('disconnect', () => {
        socket.disconnect()
        console.log(' user disconnected');
    });
});

app.get("/api", (req, res) => {
    res.json({
        message: "Hello Kittens",
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});