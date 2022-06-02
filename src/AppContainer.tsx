import { ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { TAppState } from "./reducers";

const mapStateToProps = (state: TAppState) => ({
  auth: state.auth,
});

export default function AppContainer(WrappedComponent: React.FC<any>) {
  const WrappedComponentWithContainer = (props: any): JSX.Element => {
    return <WrappedComponent {...props} />;
  };

  return connect(mapStateToProps, null)(WrappedComponentWithContainer);
}
