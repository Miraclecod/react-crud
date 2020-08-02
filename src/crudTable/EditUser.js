import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'

const style = {
    width: '60%',
    margin: 'auto'
}
const indent = {
    marginLeft: '20px'
}

function EditUserForm(props) {
    const [user, setUser] = useState(props.currentUser);

    useEffect( () => {
        setUser(props.currentUser)
    }, [props])

    function handleChange(e){
        const { name, value} = e.target;
        setUser({...user, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(user.surname && user.email && user.login) props.updateUser(props.setId, user);
    }

    return (
        <Form style={style}>
        <Form.Group controlId="formBasicEmail">
            <Form.Control size="text" type="text" value={user.email} name="email" onChange={handleChange} /><br />
            <Form.Control size="text" type="text" value ={user.surname} name="surname"  onChange={handleChange} /><br />
            <Form.Control size="text" type="text" value={user.login} name="login"  onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Edit User
        </Button>
        <Button style={indent} type="submit" onClick={() => props.setEdit(false)} >Cancel</Button>
        </Form>
    )
}

export default EditUserForm