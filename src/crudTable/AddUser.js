import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const style = {
    width: '60%',
    margin: 'auto'
}

function AddUser(props) {

    const newUser = { email: '', surname: '' , login: '' };
    
    const [user, setUser] = useState(newUser);

    function handleInputChange(e) {
        const {name,value} = e.target;
        setUser({...user, [name]: value});
    }

    function handleUserSubmit(e) {
        e.preventDefault();
        if(user.email && user.surname && user.login && document.getElementById('checkbox_check').checked){
            handleInputChange(e, props.sendingUser(user));  
        }
    }

    return(
        <Form id="CrudTableForm" style={style}>
        <Form.Group controlId="formBasicEmail">
            <Form.Control size="text" type="text" value={user.email} name="email" placeholder="Email" onChange={handleInputChange} /><br />
            <Form.Control size="text" type="text" value ={user.surname} name="surname" placeholder="Name" onChange={handleInputChange} /><br />
            <Form.Control size="text" type="text" value={user.login} name="login" placeholder="Login" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" id="checkbox_check" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleUserSubmit}>
            Add
        </Button>
        </Form>
    )
}

export default AddUser