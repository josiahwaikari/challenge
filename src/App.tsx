import React from "react";
import "./App.css";
import ClassList from "./components/ClassList";
import Login from "./components/Login";
import AppContainer from "./AppContainer";

function App(props: any) {
  return <div>{props.auth.authenticated ? <ClassList /> : <Login />}</div>;
}

export default AppContainer(App);
