import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        DEVSESSIONS USERS CONTROL
        </p>

        <Table className="container" responsive striped bordered hover dark size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><Button className="btn-success">UPDATE</Button>{' '}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><Button className="btn-success">UPDATE</Button>{' '}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td><Button className="btn-success">UPDATE</Button>{' '}</td>
          </tr>
          
        </tbody>
      </Table>
      </header> 
      
    </div>
  );
}

export default App;
