import React from "react";

export type Student = {
  id: string;
  name: string;
};

export type Classroom = {
  id: string;
  name: string;
  students: Student[];
};

export type Auth = {
  name: string;
  authenticated: boolean;
};
export type ClassroomActionType = {
  type: string;
  payload: {
    classrooms: Classroom[];
  };
};

export type StudentActionType = {
  type: string;
  payload: {
    student: Student;
  };
};

export type AuthActionType = {
  type: string;
  payload: {
    name: string;
    authenticated: boolean;
    error: string;
  };
};

// props
export type ClassListProps = {
  classrooms: Classroom[];
  student: Student;
  handleLogout: () => void;
  updateName: (name: string) => void;
  updateAuthentication: (authenticated: boolean) => void;
};

export type AuthProps = {
  auth: Auth;
  storeStudent: (student: Student) => void;
  storeClassrooms: (classrooms: Classroom[]) => void;
  updateName: (name: string) => void;
  updateAuthentication: (authenticated: boolean) => void;
  updateError: (error: string) => void;
};
