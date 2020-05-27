import React, { useState, useEffect } from 'react'
import './ToDo.css';
import Header from './Header'
import Tasks from './Tasks'
// import { AddTask } from './utils'

function Parent({ socket }) {

    const [tasks, tasksSet] = useState([])

    useEffect(()=>{

        socket.on(`loadMyTasks`,tasks=>tasksSet(tasks))

    },[])

    const AddTaskhere = (name) => {

        // const addedTask = AddTask(tasks, name)
        socket.emit(`addtask`, name)
        // tasksSet(addedTask)
    }

    const TriggerisChecked = (id) => {

        var obj = tasks.filter(task => task.id === id)[0]
        const reducedTasks = tasks.filter(task => task.id !== id)
        obj = { ...obj, isChecked: !obj.isChecked }
        tasksSet([...reducedTasks, obj])
    }

    return (
        <React.Fragment>

            <Header AddTask={AddTaskhere} />

            <ul>
                {tasks.length === 0 ? `No tasks have been added yet` : <Tasks tasks={tasks} TriggerisChecked={(id) => TriggerisChecked(id)} />}
            </ul>
        </React.Fragment>
    )
}

// utils.js


export default Parent
