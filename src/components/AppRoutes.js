import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "routes";
import Modal from "./modal/Modal";

export const AppRoutes = ({ redirect }) => (
  <Switch>
    <Route exact path={routes.HOME} component={Modal} />
  </Switch>
);

AppRoutes.propTypes = {
  redirect: PropTypes.string
};

export default withRouter(AppRoutes);
