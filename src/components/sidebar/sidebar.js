import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <div>
                <ul className="sidebar navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-th-large"></i>
                            <span>Grid</span>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                           
                            <Link className="dropdown-item" to="/add_grid">Add Grid</Link>
                            {/* <Link className="dropdown-item" to="register.html">Register</Link>
                            <Link className="dropdown-item" to="forgot-password.html">Forgot Password</Link> */}
                            
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/layer">
                            <i className="fas fa-fw fa-layer-group"></i>
                            <span>Layer</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/client_billing">
                            <i className="fas fa-fw fa-money"></i>
                            <span>Client Billing</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sub_contructor">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Sub-Contructor</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reports">
                            <i className="fas fa-fw fa-chart-bar"></i>
                            <span>Reports</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/help">
                            <i className="fas fa-fw fa-hands-helping"></i>
                            <span>Help</span></Link>
                    </li>
                </ul>

            </div >


        );
    }





}
export default SideBar;