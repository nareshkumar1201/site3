import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Services from "./component/Services";
import About from "./component/About";
import Proposal from "./component/Proposal";
import ProposalState from "./context/proposalFormContext/ProposalState";
import AlertState from "./context/alertContext/AlertState";

function App() {
  return (
    <ProposalState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              {/*<Route exact path="/services" component={Services} /> */}
              <Route exact path="/aboutus" component={About} />
              <Route exact path="/proposal" component={Proposal} />
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </ProposalState>
  );
}

export default App;
