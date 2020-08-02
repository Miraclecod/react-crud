import React, { useState, useEffect } from 'react';
import './App.css';
import TododList from './crudTable/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import AddUserForm from './crudTable/AddUser'
import EditUserForm from './crudTable/EditUser';

const styles = {
    width: "70%",
    margin: "auto"
}

function App() {

  let apiId = 'http://178.128.196.163:3000/api/records/';
  const initialUser = { email: '', name: '', login: '' }
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [id, setId] = useState(null);

  function editUser(id, user) {
    setEdit(true);
    setCurrentUser(user);
    setId(id);
  }

  function getData() {
    fetch(apiId)
      .then(response => response.json())
      .then(todos => {
          setUsers(todos)
       })
  }
  //  Read
  useEffect(() => {
    getData();
  },[])


  // Create
  async function sendingUser(data) {
    let response = await fetch(apiId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({data })
        })
        if(response.status === 200) {
          getData();
        }else{
          alert(response.status)
        }
  }

  // Update
  async function updateUser(id, data) {
    let response = await fetch(apiId  + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
    })
    if(response.json === 200) {  
      setCurrentUser(initialUser);
      setEdit(false);
      getData();
    }
  }

  // Delete
  async function deleteUser(id) {
    let response = await fetch(apiId + id, {
      method: 'DELETE',
    })
    if(response.status === 200) {
      getData();
    }
  }


  return (
    <div className="App">
      <h1>Crud interface</h1>
      <Table striped bordered hover style={styles}>
      <TododList users = {users} deleteUser = {deleteUser} editUser = { editUser } />
      </Table>
      <br />
      { edit ? (
        <>
        <h3>User edit form</h3>
        <br />
        <EditUserForm 
          currentUser = { currentUser } 
          setEdit = { setEdit }
          updateUser = { updateUser }
          setId = { id }
        />
        </>
      ) : (
        <>
         <h3>User create form</h3>
        <br />
        <AddUserForm sendingUser = { sendingUser } />
        </>
      )
      }
      <br />
    </div>
  );
}

export default App;
