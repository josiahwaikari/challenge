import { ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import { updateAuthentication, updateName } from "../actions";
import { TAppState } from "../reducers";
import { ClassListProps } from "../types";

const mapStateToProps = (state: TAppState) => ({
  classrooms: state.classrooms,
  student: state.student,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, never, any>
): DispatchProps => ({
  updateName: (name: string) => dispatch(updateName(name)),
  updateAuthentication: (authenticated: boolean) =>
    dispatch(updateAuthentication(authenticated)),
});

type LocalProps = {
  handleLogout: () => void;
};

export default function ClassListContainer(
  WrappedComponent: React.FC<ClassListProps & LocalProps>
) {
  const WrappedComponentWithContainer = (
    props: ClassListProps | any //lol
  ): JSX.Element => {
    const handleLogout = () => {
      props.updateAuthentication(false);
      props.updateName("");
    };

    return <WrappedComponent {...props} handleLogout={handleLogout} />;
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponentWithContainer);
}

type DispatchProps = {
  updateName: (name: string) => void;
  updateAuthentication: (authenticated: boolean) => void;
};
