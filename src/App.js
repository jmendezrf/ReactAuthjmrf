import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


let Router = BrowserRouter;

class App extends React.Component{
  render (){
   return(
     <Router>
      <div className="App">
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <p>
             DEVSESSIONS USERS CONTROL
             </p>
             <Route exact path="/" component={newUser} /> 
             <Route path="/users" component={users} />  
     <div>
     
       
     </div>
  
    </header> 
   
    </div>
    </Router>
   
   );
   }
}

const newUser = ()=> (
  <div>
    <h1>FORMULARIO</h1>
    <p>This is OUR FORMULARIO</p>
    <button className="btn"><Link  className="btn btn-info" to="/users">viewUsers</Link></button>
  </div>

)


const users = ()=>(
  <div className="container-fluid">
  <Table className="container" responsive striped bordered hover dark size='lg'>
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
      <td><Button className="btn-info"><FontAwesomeIcon icon={ faEdit }/></Button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Button className="btn-info"><FontAwesomeIcon icon={ faEdit }/></Button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><Button className="btn-info"><FontAwesomeIcon icon={ faEdit }/></Button></td>
    </tr>
    
  </tbody>
 
</Table>
<button className="btn"><Link  className="btn btn-info" to="/">CreateNewUser</Link></button>
</div>
)


export default App;

