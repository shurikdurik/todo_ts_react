import React from 'react'

import {Todo} from '../todo.model'

interface TodoListProps {
    todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const { todos } = props
    return (
        <ul>
           {todos.map(item => <li key={item.id}>{item.text}</li>)} 
        </ul>
    )
}

export default TodoList
