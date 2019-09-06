import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div className = "todo-item">
                <input type="checkbox" />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}
