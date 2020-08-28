import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,

} from 'react-router-dom';

class AddGrid extends Component {
    render() {

        return (
            <div className="container-fluid">
           
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/add_grid">Add Grid</Link>
                    </li>
                    <li className="breadcrumb-item active">Overview</li>
                </ol><br />
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="addGrid" id="addGrid" className="form-control" placeholder="Add Grid Number *" />

                                </div>

                            </div>
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <input type="text" name="addGridArea" id="addGridArea" className="form-control" placeholder="Add Grid Area *" />

                                </div>

                            </div>

                        </div><br />
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <h5>Add Geo Location</h5>
                                </div>

                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col col-md-6">
                                <div className="row">
                                    <div className="col col-md-4">
                                        <div className="form-group">
                                            <input type="text" name="latitude" id="latitude" className="form-control" placeholder="Latitude *" />

                                        </div>

                                    </div>
                                    <div className="col col-md-4">
                                        <div className="form-group">
                                            <input type="text" name="longitude" id="longitude" className="form-control" placeholder="Longitude *" />

                                        </div>

                                    </div>
                                    <div className="col col-md-3">
                                        <div className="form-group">
                                            <button className="btn btn-sm btn-primary">+</button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="col col-md-6">
                                <div className="form-group">
                                    <div style={{ height: "200px", width: "400px", backgroundColor: "green" }}>

                                    </div>

                                </div>

                            </div>

                        </div><br />
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
export default AddGrid;