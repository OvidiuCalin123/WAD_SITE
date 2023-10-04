import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLoginPage, LoginCardLayout } from "./styleLoginCard";

import "./loginPageStylesCSS.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/welcome");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [accountNotFoundMessage, setAccountNotFoundMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fieldValidationRegex = {
    password: /^[-\d\w@$]{5,20}$/i,
    email: /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };

  const validate = (field, regex) => {
    return regex.test(field);
  };

  const handleEmailChange = (e) => {
    const isValid = validate(e.target.value, fieldValidationRegex.email);
    if (isValid) {
      setEmail(e.target.value);
    }
    setEmailValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const isValid = validate(e.target.value, fieldValidationRegex.password);
    if (isValid) {
      setPassword(e.target.value);
    }
    setPasswordValid(isValid);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAccountNotFoundMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [accountNotFoundMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValid && passwordValid) {
      fetch(
        `https://localhost:7171/api/LoginUser?email=${email}&password=${password}`,
        {
          method: "GET",
          mode: "cors",
        }
      )
        .then((response) => {
          if (response.status === 200) {
            handleClick();
          } else if (response.status === 404) {
            setAccountNotFoundMessage(
              "Account not found or credentials are invalid."
            );
            throw new Error("Resource not found");
          } else if (response.status === 500) {
            setAccountNotFoundMessage("There was a server error");
            throw new Error("Internal server error");
          } else {
            setAccountNotFoundMessage("Unexpected error.");
            throw new Error(`Unexpected status code: ${response.status}`);
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error.message);
        });
    } else {
      console.log("Form submission failed. Please check your input.");
    }
  };

  return (
    <StyledLoginPage>
      <div className="title" style={{ marginBottom: "2rem" }}></div>
      <div
        className={`card ${
          accountNotFoundMessage ===
          "Account not found or credentials are invalid."
            ? "shake-card"
            : ""
        }`}
      >
        <LoginCardLayout
          className="card-body p-5"
          style={{ height: "62vh", display: "flex", justifyContent: "center" }}
        >
          <h1 style={{ paddingBottom: "2rem" }}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="col-md-4 pb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control ${emailValid ? "" : "is-invalid"}`}
                id="email"
                style={{ width: "40vh" }}
                onChange={handleEmailChange}
                required
              />
              {!emailValid && (
                <div className="invalid-feedback" style={{ width: "30vh" }}>
                  Invalid email address.
                </div>
              )}
            </div>
            <div className="col-md-4 pb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${passwordValid ? "" : "is-invalid"}`}
                id="password"
                style={{ width: "40vh" }}
                onChange={handlePasswordChange}
                required
              />
              {!passwordValid && (
                <div className="invalid-feedback" style={{ width: "30vh" }}>
                  Password must be 8-20 characters and can contain " $@- "
                  special characters.
                </div>
              )}
            </div>
            <div className="mb-3 form-check pb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember password
              </label>
            </div>
            <div className="pb-2">
              <p className="error-message" style={{ color: "red" }}>
                {accountNotFoundMessage}
              </p>
            </div>

            <a href="register">Don't have an Account? Register Here</a>
            <div className="col-12 pt-4">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "35%" }}
              >
                Log in
              </button>
            </div>
          </form>
        </LoginCardLayout>
      </div>
    </StyledLoginPage>
  );
};
