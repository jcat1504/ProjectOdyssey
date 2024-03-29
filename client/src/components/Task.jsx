import React from 'react';
import socketIO from 'socket.io-client';
import AddTask from './AddTask';
import Nav from './Nav';
import TasksContainer from './TaskContainer';

const socket = socketIO.connect('http://localhost:4000');

const Task = () => {
    return (
        <div>
            <Nav />
            <AddTask socket={socket} />
            <TasksContainer socket={socket} />
        </div>
    )
}

export default Task;