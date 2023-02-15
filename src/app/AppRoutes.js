import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
//Import Components
const Login = lazy(() => import("./examples/user-pages/Login.js"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Ac = lazy(() => import("./air-condition/Index.js"));
const Balcony = lazy(() => import("./balcony/Index.js"));
const Bathroom = lazy(() => import("./tiles/bathroom/Index.js"));
const DoorFrame = lazy(() => import("./door-frame/Index.js"));
const SteelFrame = lazy(() => import("./steel-frame/Index.js"));
const Electrical = lazy(() => import("./electric/Index.js"));
const Ensuite = lazy(() => import("./tiles/ensuite/Index.js"));
const Hebel = lazy(() => import("./hebel/Index.js"));
const Kitchen = lazy(() => import("./tiles/kitchen/Index.js"));
const Laundry = lazy(() => import("./tiles/laundry/Index.js"));
const Plumging = lazy(() => import("./plumbing/Index"));
const WaterProofAfter = lazy(() => import("./water-proof/after/Index.js"));
const WaterProofBefore = lazy(() => import("./water-proof/before/Index.js"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/waterproof/after" component={WaterProofAfter} />
          <Route path="/waterproof/before" component={WaterProofBefore} />
          <Route path="/balcony" component={Balcony} />
          <Route path="/plumbing" component={Plumging} />
          <Route path="/tiles/bathroom" component={Bathroom} />
          <Route path="/door-frame" component={DoorFrame} />
          <Route path="/steel-frame" component={SteelFrame} />
          <Route path="/electrical" component={Electrical} />
          <Route path="/tiles/ensuite" component={Ensuite} />
          <Route path="/hebel" component={Hebel} />
          <Route path="/tiles/kitchen" component={Kitchen} />
          <Route path="/tiles/laundry" component={Laundry} />
          <Route path="/air-condition" component={Ac} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
