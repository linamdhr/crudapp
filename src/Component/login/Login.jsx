import React from "react";
import img from "../../Image/halo.jpg";
import "../../Css/Login.css";

const Login = () => {
  return (
    <>
      <div className="login-form">
        <div className="wrapper mb_30 ">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="login-img">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <span className="sub__title">Hello !</span>
              <h3 className="mb-3 heading__title">Welcome to Login Page</h3>

              <form className="login-body">
                <div className="form-wrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="uk-input"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="form-wrapper">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="uk-input"
                    name="password"
                    id="password"
                    autoComplete="off"
                    required
                  />
                </div>

                <button className="btn">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
