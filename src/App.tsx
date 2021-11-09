import React, {useState} from 'react';

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo';
import {Todo} from './todo.model'

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  const handlerAddText = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, { id: Math.random().toString(), text }
    ]); 
  }

  return (
    <div className="App">
      <NewTodo onAddText={handlerAddText}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
