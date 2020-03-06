import React from 'react';
import '../../src/App.css';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MDBDataTable } from 'mdbreact';
import usersAPI from '../api';


const allUsers = () => {
  return (
    <div className="container">
      <MDBDataTable
        hover
        bordered
        btn
        responsiveMd
        entries={5}
        small

        theadColor="indigo"
        data={usersAPI}></MDBDataTable>
      <button className="btn"><Link className="btn btn-info" to="/">CreateNewUser</Link></button>
    </div>
  );

}



export default allUsers;