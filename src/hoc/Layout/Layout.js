import React from "react";

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

export default Layout;
