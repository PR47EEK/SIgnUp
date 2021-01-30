import React from "react";
import Login from "./login";
var islogin = true;

function App() {
  return (
    <div className="container">{islogin ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
