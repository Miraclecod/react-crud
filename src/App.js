import React, { useState, useEffect } from 'react';
import './App.css';
import TododList from './crudTable/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

const styles = {
    width: "70%",
    marginLeft: "10%"
}

function App() {

  const [users, setUsers] = React.useState([]);

  function deleteUsers(id) {
    setUsers(users.filter(user => user !== id))
  }

  useEffect(() => {
    fetch('http://178.128.196.163:3000/api/records')
      .then(response => response.json())
      .then(todos => {
          setUsers(todos)
      })
  },[])

  //сделать update, create

  console.log(users)
  return (
    <div className="App">
      <h1>Crud interface</h1>
      <Table striped bordered hover style={styles}>
      <tbody>
      <TododList users = {users} deleteUsers= {deleteUsers} />
      </tbody>
      </Table>
    </div>
  );
}

export default App;
