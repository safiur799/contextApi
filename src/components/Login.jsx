import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
function Login() {
  const [text, setText] = useState({});
  const [userToken, setUserToken] = useState("");
  const { handleTokenChange } = useContext(AuthContext);
  const clickHandler = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        type="email"
        name="email"
        onChange={clickHandler}
        placeholder="enter email"
      />
      <input
        type="password"
        name="password"
        onChange={clickHandler}
        placeholder="enter password"
      />
      <button
        type="submit"
        onClick={() => {
          axios
            .post("https://reqres.in/api/login", text)
            .then((res) => {
              if (handleTokenChange(res.data.token) != "") {
                setUserToken(res.data.token);
              } else {
                setUserToken("");
              }
            })
            .catch(console.error);
        }}
      >
        login
      </button>
      <div>{userToken}</div>
    </div>
  );
}

export default Login;
