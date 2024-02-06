import React, { useState } from 'react';
const AddTask = ({ socket }) => {
    const [task, setTask] = useState("");

    const handleAddTodo  = e => {
        e.preventDefault();
        console.log({ task });
        setTask("");
    };
    return (
        <form className='form__input' onSubmit={handleAddTodo}>
            <label htmlFor='task'>Add Task</label>
            <input 
                type='text'
                name='task'
                id='task'
                value={task}
                className='input'
                required 
                onChange={(e) => setTask(e.target.value)}
                />
                <button className='addTodoBtn'>ADD TASK</button>
        </form>
    );
};

export default AddTask;