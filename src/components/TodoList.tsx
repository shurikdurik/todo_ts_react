import React from 'react'

import {Todo} from '../todo.model'

import './TodoList.css'


interface TodoListProps {
    todos: Todo[]
    onDelete: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const { todos, onDelete } = props
    return (
        <ul>
           {todos.map(item => <li key={item.id}>
               <span>{item.text}</span>
               <button onClick={onDelete.bind(null, item.id)}>Delete</button>
               </li>)} 
        </ul>
    )
}

export default TodoList
