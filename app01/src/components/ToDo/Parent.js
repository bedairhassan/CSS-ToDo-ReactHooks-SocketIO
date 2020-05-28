import React, { useState, useEffect } from 'react'
import './ToDo.css';
import Header from './Header'
import TasksParent from './Tasks/TasksParent'

function Parent({ socket }) {

    const [tasks, tasksSet] = useState([])

    useEffect(() =>
        socket.on(`loadMyTasks`, tasks => {

            console.table(tasks)
            tasksSet(tasks)
        }), [])

    return (
        <React.Fragment>

            <Header AddTask={name => socket.emit(`addtask`, name)} />

            <TasksParent socket={socket} tasks={tasks} />

        </React.Fragment>
    )
}



// utils.js


export default Parent
