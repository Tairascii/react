import React from 'react'
// import { FaTimes } from 'react-icons/fa'
export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`${task.isDone ? 'taskIsDone' : 'task'}`}>
            <h3 id="task-h3">{task.title}</h3>
            <button className="delete-btn" onClick={() => onDelete(task.id)}></button>
            <button className="done-btn" onClick = {() => onToggle(task.id)}>{task.isDone ? 'Undone' : 'Done'}</button>
            <p>{task.time}</p>
            {/* <button className="done-btn" onClick = {() => onToggle(task.id)}>{task.isDone ? 'Undone' : 'Done'}</button> */}
            
        </div>
    )
}

export default Task
