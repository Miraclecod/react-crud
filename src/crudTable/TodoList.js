import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    return (
        <tr>
            { props.users.map((user, index) => {
                return (
                    <TodoItem 
                        users = {user.data}
                        key = {index}
                    />
                )
            })}
        </tr>
    )
}

export default TodoList