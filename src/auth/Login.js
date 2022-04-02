import React, { useState, useEffect } from "react";
import firebase from "../Firebase";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [loggedIn, setloggedIn] = useState(localStorage.getItem("userLogged"))

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
        // localStorage.setItem("userLogged", true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
        // localStorage.setItem("userLogged", true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logOut = () => {
    firebase.auth().signOut();
    // localStorage.setItem("userLogged", false);
  };

  const resetInput = () => {
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="inputBox">
        <h3>Login/Register</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
}

export default Login;
