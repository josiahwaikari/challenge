import { ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";
import { connect } from "react-redux";
import {
  setStudent,
  setClassrooms,
  updateName,
  updateAuthentication,
  updateError,
} from "../actions";
import { TAppState } from "../reducers";
import airtableService from "../services/airtable.service";
import { AuthProps, Classroom, Student } from "../types";

const mapStateToProps = (state: TAppState) => ({
  classrooms: state.classrooms,
  student: state.student,
  auth: state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, never, any>
): DispatchProps => ({
  storeClassrooms: (classrooms: Classroom[]) =>
    dispatch(setClassrooms(classrooms)),
  storeStudent: (student: Student) => dispatch(setStudent(student)),
  updateName: (name: string) => dispatch(updateName(name)),
  updateAuthentication: (authenticated: boolean) =>
    dispatch(updateAuthentication(authenticated)),
  updateError: (error: string) => dispatch(updateError(error)),
});

type LocalProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

export default function LoginContainer(
  WrappedComponent: React.FC<AuthProps & LocalProps>
) {
  const WrappedComponentWithContainer = (props: AuthProps): JSX.Element => {
    const handleSubmit = async () => {
      props.updateError("");
      const student = await airtableService
        .getStudent(props.auth.name)
        .catch((err) => {
          console.log(err);
        });

      if (!student) {
        props.updateError("No student found");
        return;
      }

      props.updateAuthentication(true);
      props.storeStudent({ id: student.id, name: student.name });
      props.storeClassrooms(student.classrooms);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.updateError("");
      props.updateName(e.target.value);
    };

    return (
      <WrappedComponent
        {...props}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponentWithContainer);
}

type DispatchProps = {
  storeClassrooms: (classrooms: Classroom[]) => void;
  storeStudent: (profile: Student) => void;
  updateName: (name: string) => void;
  updateAuthentication: (authenticated: boolean) => void;
  updateError: (error: string) => void;
};
