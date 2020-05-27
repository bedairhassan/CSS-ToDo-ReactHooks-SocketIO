import React from 'react'
import './ToDo.css';

function Parent() {
    return (
        <React.Fragment>
            <div class="header">
                <h2>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..." />
                <span onclick="newElement()" class="addBtn">Add</span>
            </div>

            <ul>
                <li>Hit the gym</li>
                <li class="checked">Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>
        </React.Fragment>
    )
}

export default Parent
