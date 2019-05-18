import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRouteContainer = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PrivateRouteContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.signin.isAuth
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteContainer);
