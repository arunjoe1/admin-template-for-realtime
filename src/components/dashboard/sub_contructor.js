import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from 'react-router-dom';

class SubContructor extends Component {
    render() {

        return (
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/sub_contructor">Sub Contructor</Link>
                    </li>
                    <li className="breadcrumb-item active">Overview</li>
                </ol><br />
                <h4>ADD SUBCONTRACTOR</h4>
                <br />
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="sub_name" id="sub_name" className="form-control" placeholder="Enter Subcontractor Name *" />

                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="sub_code" id="sub_code" className="form-control" placeholder="Enter Subcontractor Code *" />

                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="contact_person" id="contact_person" className="form-control" placeholder="Enter Contact Person *" />

                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="sub_address" id="sub_address" className="form-control" placeholder="Enter Subcontractor Address *" />

                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="sub_phone" id="sub_phone" className="form-control" placeholder="Enter Subcontractor Phone *" />

                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="sub_mail" id="sub_mail" className="form-control" placeholder="Enter Subcontractor E-mail *" />

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
            </div >


        );

    }




}
export default SubContructor;