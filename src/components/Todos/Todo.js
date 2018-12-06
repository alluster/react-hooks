import React from 'react';

export const Todo = ({todo, index, completeTodo, removeTodo}) => 
<li style={{ color: todo.completed ? 'red' : 'blue' }}>{todo.text}
          <button onClick={() => completeTodo(index)}>Complete todo</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
</li>;
