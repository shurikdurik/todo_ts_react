import React, {useState} from 'react';

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo';
import {Todo} from './todo.model'
import { setConstantValue } from 'typescript';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  const handlerAddText = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, { id: Math.random().toString(), text }
    ]); 
  }

  const handlerDelete = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddText={handlerAddText}/>
      <TodoList todos={todos} onDelete={handlerDelete}/>
    </div>
  );
}

export default App;
