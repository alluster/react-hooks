import React, { useState } from 'react';
import { Todo } from '../../components/Todos/Todo';
import { TodoForm } from '../../components/Todos/TodoForm'
;
export const Home = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Example todo',
      completed: false
    },    
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };  
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Please add a new todo</h1>
      <TodoForm addTodo={addTodo} />
       {todos.map((todo, index) => (
         <div>
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
          </div>
        ))}
    </div>
  );
}
