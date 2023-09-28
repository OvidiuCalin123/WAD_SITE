import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLoginPage, LoginCardLayout } from "./styleLoginCard";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/welcome");

  // Use state to manage input validation
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const fieldValidationRegex = {
    password: /^[-\d\w@$]{8,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };

  const validate = (field, regex) => {
    return regex.test(field);
  };

  const handleEmailChange = (e) => {
    const isValid = validate(e.target.value, fieldValidationRegex.email);
    setEmailValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const isValid = validate(e.target.value, fieldValidationRegex.password);
    setPasswordValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValid && passwordValid) {
      handleClick();
    } else {
      console.log("Form submission failed. Please check your input.");
    }
  };

  return (
    <StyledLoginPage>
      <div className="title" style={{ marginBottom: "2rem" }}></div>
      <div className="card">
        <LoginCardLayout className="card-body p-5" style={{ height: "60vh" }}>
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
            <div className="mb-3 form-check pb-5">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember password
              </label>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
            </div>
          </form>
        </LoginCardLayout>
      </div>
    </StyledLoginPage>
  );
};
