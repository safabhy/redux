import React from 'react'

import EditTodo from './EditTodo'

const Todo = ({el}) => {
    return (
        <div >
            <h2> {el.text} </h2>
            <EditTodo el={el} />
        </div>
    )
}

export default Todo