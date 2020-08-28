import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import DashBoard from './components/dashboard/dashboard';
import AddGrid from './components/dashboard/add_grid';
import Layer from './components/dashboard/layer';
import ClientBilling from './components/dashboard/client_billing';
import SubContructor from './components/dashboard/sub_contructor';
import Reports from './components/dashboard/reports';
import Help from './components/dashboard/help';



import Footer from './components/footer/footer';
import Logout from './components/logout_model/logout';


function App() {
  return (
    <Router>
      <div id="page-top">
        <Header />
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper">
            <Switch>
              <Route exact path="/" component={DashBoard}></Route>
              <Route exact path="/add_grid" component={AddGrid}></Route>
              <Route exact path="/layer" component={Layer}></Route>
              <Route exact path="/client_billing" component={ClientBilling}></Route>
              <Route exact path="/sub_contructor" component={SubContructor}></Route>
              <Route exact path="/reports" component={Reports}></Route>
              <Route exact path="/help" component={Help}></Route>
            </Switch>
            <Footer />
          </div>

        </div>
      </div>
      <Logout />
    </Router>

  );
}

export default App;
