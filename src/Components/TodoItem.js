import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={() => props.handleChange(props.item.id)} checked={props.item.completed}/>
            <p className={props.item.completed ? "completed" : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem