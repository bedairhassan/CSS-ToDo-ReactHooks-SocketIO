import React from 'react'

const Task = ({ task: { isChecked, name, id }, TriggerisChecked }) =>
    <li
        onClick={() => TriggerisChecked(id)}
        className={isChecked && `checked`}>{name}</li>

export default Task
