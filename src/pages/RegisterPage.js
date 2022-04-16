import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth();

  const Register = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Registration Successful");
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="register-parent">
      <div className="register-top"></div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_5tkzkblw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="col-md-4 z1">
          <div className="register-form">
            <h2>Register</h2>
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
            <input
              className="form-control mb-2"
              type="password"
              name="password"
              id="confirm-password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={Register}>REGISTER</button>
            <hr />
            <p>
              Already have an Account ?
              <Link to="/login" className="text-decoration-none px-2 fw-bold">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
