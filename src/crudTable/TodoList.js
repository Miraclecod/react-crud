import React from 'react'
import { Button } from 'react-bootstrap'


function TodoList(props) {
    return (
        <>
        <thead>
            <tr>
                <td>Email</td>
                <td>Name</td>
                <td>Login</td>
                <td>Editing</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            { props.users.map( user => {
                return (
                    <tr key={user._id}>
                        <td>{user.data?.email || user.data?.name}</td>
                        <td>{user.data?.Age || user.data?.surname}</td>
                        <td>{user.data?.Login || user.data?.login}</td>
                        <td>
                        <Button variant="success" onClick={() => props.updateUser(user._id)}>Редактировать</Button>
                        </td>
                        <td>
                        <Button variant="danger" onClick={() => props.deleteUser(user._id, user)}>Удалить</Button>
                        </td>
                    </tr>
                    )
                })
            }
        </tbody>
        </>
    )
}

export default TodoList