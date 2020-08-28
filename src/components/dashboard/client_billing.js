import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from 'react-router-dom';

class ClientBilling extends Component {
    render() {

        return (
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/client_billing">Client Billing</Link>
                    </li>
                    <li className="breadcrumb-item active">Overview</li>
                </ol><br />
                <h4>GENERATE CLIENT BILLING</h4>
                <br />


                <div className="row">
                    <div className="col col-lg-12">
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <select type="text" name="sub_name" id="sub_name" className="form-control">
                                        <option>Select Completed Grids</option>
                                    </select>

                                </div>

                            </div>
                        </div>
                        <center>
                            <div className="row">
                                <div className="col col-md-6">
                                    <div className="form-group">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="checkbox" name="sub_name" id="sub_name" />&nbsp;&nbsp;Select Completed Layers
                                </div>

                                </div>
                            </div>
                        </center>
                        <center>
                            <div className="row">
                                <div className="col col-md-6">
                                    <div className="form-group">
                                        <input type="checkbox" name="sub_name" id="sub_name" />&nbsp;&nbsp;Layer 001
                                </div>

                                </div>
                            </div>
                        </center>
                        <center>
                            <div className="row">
                                <div className="col col-md-6">
                                    <div className="form-group">
                                        <input type="checkbox" name="sub_name" id="sub_name" />&nbsp;&nbsp;Layer 002
                                </div>

                                </div>
                            </div>
                        </center>
                        <center>
                            <div className="row">
                                <div className="col col-md-6">
                                    <div className="form-group">
                                        <input type="checkbox" name="sub_name" id="sub_name" />&nbsp;&nbsp;Layer 003
                                </div>

                                </div>
                            </div>
                        </center>
                        <center>
                            <div className="row">
                                <div className="col col-md-6">
                                    <div className="form-group">
                                        <input type="checkbox" name="sub_name" id="sub_name" />&nbsp;&nbsp;Layer 004
                                </div>

                                </div>
                            </div>
                        </center>

                        <br />
                        <center>
                            <table className="table table-striped table-hover table-bordered">
                                <tr className="bg-dark"><th>S.No</th><th>Grid Number</th><th>Layer Number</th><th></th></tr>
                                <tr><td>1</td><td>Grid 1</td><td>Layer 001</td><td>Layer 003</td></tr>
                                <tr><td>2</td><td>Grid 2</td><td>Layer 001</td><td></td></tr>
                            </table>
                        </center>

                        <br />
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="date" name="sub_name" id="sub_name" className="form-control" />
                                       

                                </div>

                            </div>
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="sub_name" id="sub_name" placeholder="Enter IPC Number *"  className="form-control"/>
                                       

                                </div>

                            </div>
                        </div>
                        <br />


                        <center><div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <button className="btn btn-md btn-success">Save</button>
                                </div>

                            </div>
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <button className="btn btn-md btn-danger">Discard</button>
                                </div>

                            </div>
                        </div></center>

                    </div>

                </div>







            </div>





        );

    }




}
export default ClientBilling;