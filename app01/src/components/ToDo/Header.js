import React, { useState } from 'react'
import Input from '../Reusable/Input'
import Button from '../Reusable/Button'

const Header = ({AddTask}) => {

    const [taskName,taskNameSet]=useState(`-`)

    return (<div class="header">
        <h2>My To Do List</h2>
        <Input 
        placeholder={`Enter Task`}
        onChange={(taskName)=>taskNameSet(taskName)}
        type={`text`}/>

<Button
onClick={()=>AddTask(taskName)}
className={`addBtn`}
name={`Add Task`}
/>
        

    </div>)
}

export default Header
