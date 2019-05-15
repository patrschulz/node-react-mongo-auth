import React from "react";
import PropTypes from "prop-types";
import Clear from "./clear";
import Cabinet from "./cabinet";
import { connect } from "react-redux";

const Layout = props => {
  return props.isAuth ? (
    <Cabinet>{props.children}</Cabinet>
  ) : (
    <Clear>{props.children}</Clear>
  );
};

Layout.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.signin.isAuth
});

export default connect(mapStateToProps)(Layout);
