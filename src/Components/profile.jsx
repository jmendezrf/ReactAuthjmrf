import React from 'react';
import { Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

class profile extends React.Component {


    constructor(props) {

        super(props);
        this.state = {
            userName: ""
        };
    }

    componentDidMount() {
        this.setState(
            {
                userName: "Jmendez"
            }
        )
    }



    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="bg text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" viewBox="0 0 32 32">

                                        <path className="path" stroke="#48494b" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="300" stroke-dashoffset="300" fill="none" d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />


                                    </svg>


                                </div>
                                <h4 className="card-title text-dark">{this.state.userName}</h4>
                                <p className="card-text text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas soluta ut vel. Accusamus quaerat nisi tenetur qui voluptatibus impedit. </p>
                                <a href="#" className="btn btn-success mr-2">SignOut</a>
                                <a href="#" className="btn btn-dark">ViewUsers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default profile;

