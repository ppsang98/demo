import React, { useContext } from "react";
import "./LoginButton.css";
import Swal from "sweetalert2";
import { UserContext } from "../../CommonContext";

const LoginButton = (props) => {
  const userContext = useContext(UserContext);

  const showLoginPopup = () => {
    Swal.fire({
      title: "Login",
      html:
        '<input id="username" type="text" class="swal2-input" placeholder="User name">' +
        '<input id="password" type="password" class="swal2-input" placeholder="password">',
      focusConfirm: false,
      confirmButtonText: "Login",
    }).then((result) => {
      if (result.isConfirmed) {
        const username = document.getElementById("username").value;
        userContext.gotoLogin(username);
      }
    });
  };

  return userContext.username === "" ? (
    <div className="loginButton" onClick={() => showLoginPopup()}>
      <h5>LOGIN</h5>
    </div>
  ) : (
    <div className="loginButton" onClick={() => userContext.gotoLogout()}>
      <h5>LOGOUT</h5>
    </div>
  );
};

export default LoginButton;
