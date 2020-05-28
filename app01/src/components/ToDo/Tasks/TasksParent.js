import React from 'react'
import Tasks from './Tasks'

const TasksParent = ({ socket, tasks }) => {

    if (tasks.length === 0) {
        return <h6>No tasks have been added yet</h6>
    }
    else {

        return (<React.Fragment>
            <ul>
                <Tasks
                    tasks={tasks}
                    TriggerisChecked={(id) => socket.emit(`TriggerisChecked`, id)} />
            </ul>
        </React.Fragment>)
    }

}

export default TasksParent
