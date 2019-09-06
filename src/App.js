import React, {Component} from 'react';
import TodoItem from './Components/TodoItem'
import todoComponents from "./todos"

class App extends Component {
  render() {
    const todoList = todoComponents.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className = "todo-list">
        {todoList}
      </div>
    );
  }
  
}

export default App;
