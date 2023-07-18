import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = ({children}) => {
  return ReactDOM.createPortal(
    <div class='portal'>
     {children}
    </div>,
    document.getElementById("portal")
  );
};

export {PortalComponent}