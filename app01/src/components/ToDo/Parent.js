import React, { useState } from 'react'
import './ToDo.css';
import Header from './Header'
import Tasks from './Tasks'
// import { AddTask } from './utils'

function Parent() {

    const [tasks, tasksSet] = useState([])

    // group 1...
    const generateRandom = () => Math.floor(Math.random() * 1500)
    const obj = { isChecked: false, id: generateRandom() }
    const newTask = (name) => {
        return { ...obj, name }
    }

    const AddTask = (tasks, name) => [...tasks, newTask(name)]
    //... group 1  //
    const AddTaskhere = (name) => tasksSet(AddTask(tasks, name))

    const TriggerisChecked = (id) => {

        // var copy = [...tasks]

        // for (let i = 0; i < copy.length; i++) {

        //     if (copy[i].id === id) {
        //         console.table({ idOfCopy: copy[i].id, id: id })
        //         const PREVisChecked = copy[i].isChecked
        //         copy[i] = { ...copy[i], isChecked: !PREVisChecked }
        //     }
        // }
        // tasksSet([...copy])

        var obj = tasks.filter(task => task.id === id)[0]
        const reducedTasks = tasks.filter(task => task.id !== id)
        obj = { ...obj, isChecked: !obj.isChecked }
        tasksSet([...reducedTasks, obj])
    }

    return (
        <React.Fragment>

            <Header AddTask={AddTaskhere} />

            <ul>
                {tasks.length == 0 ? `No tasks have been added yet` : <Tasks tasks={tasks} TriggerisChecked={(id) => TriggerisChecked(id)} />}
            </ul>
        </React.Fragment>
    )
}

export default Parent
