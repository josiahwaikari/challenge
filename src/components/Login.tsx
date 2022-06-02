import LoginContainer from "./LoginContainer";

function Login(props: any) {
  return (
    <div className="login">
      <span>Student Name: </span>
      {props.auth.error && (
        <span style={{ color: "red" }}>{props.auth.error}</span>
      )}
      <input
        type="text"
        value={props.auth.name}
        onChange={props.handleChange}
      />
      <button onClick={props.handleSubmit}>Login</button>
    </div>
  );
}

export default LoginContainer(Login);
