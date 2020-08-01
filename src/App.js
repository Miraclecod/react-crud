import React, { useState, useEffect, componentDidMount } from 'react';
import './App.css';
import TododList from './crudTable/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import UserForm from './crudTable/AddUser'

const styles = {
    width: "70%",
    margin: "auto"
}

function App() {

  const [users, setUsers] = useState([]);

  function getData() {
    fetch('http://178.128.196.163:3000/api/records')
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
    let response = await fetch('http://178.128.196.163:3000/api/records', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({data })
        })
        if(response.status == 200) {
          getData();
        }else{
          alert(response.status)
        }
  }

  // Update
  // async function updateUser(id, user) {
  //   let response = await fetch('http://178.128.196.163:3000/api/records/' + id, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({  })
  //   })
  // }

  // Delete
  async function deleteUser(id) {
    let response = await fetch('http://178.128.196.163:3000/api/records/' + id, {
      method: 'DELETE',
    })
    if(response.status == 200) {
      getData();
    }
  }


  return (
    <div className="App">
      <h1>Crud interface</h1>
      <Table striped bordered hover style={styles}>
      <TododList users = {users} deleteUser = {deleteUser} />
      </Table>
      <br />
      <h3>Форма создания пользователя</h3>
      <br />
      <UserForm sendingUser = { sendingUser } />
      <br />
    </div>
  );
}

export default App;
