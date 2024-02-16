import axios from 'axios';

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(corsOptions);

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});

// const http = require("http").Server(app);
// const cors = require("cors");
// const socketIO = require('socket.io')(http, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// });
// app.use(cors());
const http = require('http').Server(app);
const socketIO = require('socket.io')(http, corsOptions);

socketIO.on('connection',(socket) =>{
    console.log(` ${socket.id} just connected`);
    socket.on('disconnect', () => {
        socket.disconnect()
        console.log(' user disconnected');
    });
});

app.use(express.static('pubic'));

app.get('/api/tasks', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8080/api/tasks');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching tasks'});
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// const fetchTasks = async () => {
//     try {
//         const response = await axios.get('http://localhost:8080/api/tasks');
//         return response.data;
//     } catch(error) {
//         console.error(error);
//         return [];
//     };
// }