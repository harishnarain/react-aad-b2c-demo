import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/ToolbarComponent/ToolbarComponent";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar isAuth={props.isAuthenticated} />

      <main>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.idToken !== null,
  };
};

export default connect(mapStateToProps)(Layout);
