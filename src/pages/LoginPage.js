import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  // loaing
  const Login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(result));
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };
  return (
    <div className="login-parent">
      <div className="row justify-content-center">
        <div className="col-md-4 z1">
          <div className="login-form">
            <h2>Login</h2>
            <hr />
            <input
              className="form-control mb-2"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control mb-2"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={Login}>Login</button>

            <hr />
            <p>
              Don't have an account ?
              <Link
                to="/register"
                className="text-decoration-none px-2 fw-bold"
              >
                Please Register
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-5 z1">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_5tkzkblw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div className="login-bottom"></div>
    </div>
  );
};

export default LoginPage;
