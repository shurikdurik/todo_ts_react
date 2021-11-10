import React, {useRef} from 'react'

import './NewTodo.css'

type NewTodoProps = {
    onAddText: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const {onAddText} = props

    const textInput = useRef<HTMLInputElement>(null)
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enterdText = textInput.current!.value;
        onAddText(enterdText);
    }

    return (
       <form onSubmit={handleSubmit}>
           <div className='form-control'>
               <label htmlFor="todo-text">
                   Todo Text
               </label>
               <input type="text" id="todo-text" ref={textInput}/>
           </div>
           <button type="submit">Add Todo</button>
       </form>
    )
}

export default NewTodo