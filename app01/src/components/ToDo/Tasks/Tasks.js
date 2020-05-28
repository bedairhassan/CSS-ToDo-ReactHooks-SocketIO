import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, TriggerisChecked }) => tasks.map(task =>
    <Task
        task={task}
        TriggerisChecked={TriggerisChecked}
    />)

export default Tasks
