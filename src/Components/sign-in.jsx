import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class login extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            email: "",
            password: ""
        }
    }

    render() {
        return (<div className="container">
            <div className="bg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" viewBox="0 0 32 32">

                    <path className="path" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="300" stroke-dashoffset="300" fill="none" d="M3 16 L23 16 M15 8 L23 16 15 24 M21 4 L29 4 29 28 21 28" />


                </svg>
            </div>
            <h2 className="py-2">Log In</h2>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xs">
                        <form>

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
                            <button className="btn py-3"><Link className="btn btn-success" to="/">SignUp</Link></button>
                            <button type="submit" className="btn btn-dark">Log in</button>

                        </form>
                    </div>
                </div>
            </div>


        </div>
        );
    };
};



export default login;

