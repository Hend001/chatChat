import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

const Register = () => {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   name: "",
  // });
  // const [err, setErr] = useState(null);

  // const handelClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(
  //       "http://localhost:4000/Backend/authentication/register",
  //       inputs
  //     );
  //   } catch (err) {
  //     setErr(err.response.data);
  //   }
  // };

  // console.log(err);

  // const handelChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   console.log(inputs);
  // };
  return (
    <div className="register">
      <div className="register-card">
        <div className="register-card-left">
          <h1 className="h1">Chat Chat</h1>
          <p className="welcome">
            Welcome to the popular social media application chat chat
          </p>
          <span className="question">Do you have an account?</span>
          <Link to="/chatChat/login">
            <button className="registerButton">Login</button>
          </Link>
        </div>
        <div className="register-card-right">
          <h2 className="register-login-h2">Register</h2>
          <form className="form">
            <input
              className="register-input"
              type="text"
              placeholder="Username"
              name="username"
              // onChange={handelChange}
            />
            <input
              className="register-input"
              type="email"
              placeholder="Email"
              name="email"
              // onChange={handelChange}
            />
            <input
              className="register-input"
              type="password"
              placeholder="Password"
              name="password"
              // onChange={handelChange}
            />
            <input
              className="register-input"
              type="text"
              placeholder="Name"
              name="name"
              // onChange={handelChange}
            />

            <button className="loginButton">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
