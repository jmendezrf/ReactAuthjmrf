import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class newUser extends React.Component {



  render() {

    return (
      <div className="container">
        <div className="bg text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" viewBox="0 0 32 32">

            <path className="path" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="300" stroke-dashoffset="300" fill="none" d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />


          </svg>


        </div>
        <h2 className="py-2">Sign Up</h2>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-xs">
              <form>
                <div className="row">
                  <div className="col">
                    <label className="text-right" htmlFor="userName" >User Name</label>
                    <input type="text" name="userName" className="form-control" placeholder="User Name" />
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <label className="text-right" htmlFor="userName" >Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col">
                    <label className="text-right" htmlFor="userName" >Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                </div>
                <button className="btn py-3"><Link className="btn btn-success" to="/login">Log In</Link></button>
                <button type="submit" className="btn btn-dark">Create User</button>

              </form>
            </div>
          </div>
        </div>


      </div>



    );
  }

}

export default newUser;

