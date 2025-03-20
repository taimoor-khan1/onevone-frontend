import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import loginScreenBg from "../../assets/images/login-screen-bg.png";

import userIcon from "../../assets/images/user-icon.png";
import emailIcon from "../../assets/images/email-icon.png";
import passwordIcon from "../../assets/images/password-icon.png";

import DefaultLayout from "../../components/DefaultLayout";
import GlassBox from "../../components/GlassBox";
import { Link } from "react-router-dom";
import FullScreenBG from "../../components/FullScreenBG";
import { LoginService } from "../../api/services/Auth";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    try {
      setLoading(true);

      if (username !== "" && password !== "") {
        const data = {
          username,
          password,
        };
        const response = await LoginService(data);
        localStorage.setItem("token", response?.token);
        localStorage.setItem("user", response?.data);
        setLoading(false);
      } else {
        toast.error("User name and password both required");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setLoading(false);
    }
  };

  return loading ? (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <h1 className="login-title">Loading.....</h1>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </FullScreenBG>
    </div>
  ) : (
    <DefaultLayout>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
          <GlassBox>
            <h2 className="login-title">Login</h2>
            <form>
              <InputGroup className="mb-md-5 mb-4">
                <InputGroup.Text>
                  <img src={userIcon} alt="Icon" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <img src={passwordIcon} alt="Icon" />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </InputGroup>

              <div className="forget-pass-div d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center">
                  <input type="checkbox" id="rememberMe" className="me-2" />
                  <label htmlFor="rememberMe" className="text-light">
                    Remember Me
                  </label>
                </div>

                {/* Forget Password Link */}
                <Link to="javascript:;" className="forget-password-btn">
                  Forget Password?
                </Link>
              </div>

              <div className="login-price-div d-flex justify-content-between align-items-center mb-5">
                <span className="text-white login-price-dollerSign">$</span>
                <span className="fw-bold text-white login-price">10.00</span>
                <span></span>
              </div>

              <div className="col-md-12">
                <button
                  type="button"
                  className="login-btn"
                  onClick={submitLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </GlassBox>
        </div>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default Login;
