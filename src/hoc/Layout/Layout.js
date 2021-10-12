import React from "react";

import Aux from "../Auxilary/Auxilary";
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
