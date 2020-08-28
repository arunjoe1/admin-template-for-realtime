import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from 'react-router-dom';

class Reports extends Component{
    render(){

        return(
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/reports">Reports</Link>
                    </li>
                    <li className="breadcrumb-item active">Overview</li>
                </ol>
            </div>


        );

    }




}
export default Reports;