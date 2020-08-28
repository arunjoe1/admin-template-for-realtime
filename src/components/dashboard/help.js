import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from 'react-router-dom';

class Help extends Component{
    render(){

        return(
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/help">Help</Link>
                    </li>
                    <li className="breadcrumb-item active">Overview</li>
                </ol>
            </div>


        );

    }




}
export default Help;