import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLoginPage, LoginCardLayout } from "./styleLoginCard";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");

  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Use state to manage input validation
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const fieldValidationRegex = {
    name: /^[a-zA-Z]{3,20}$/i,
    email: /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[-\d\w@$]{4,20}$/i,
  };

  const validate = (field, regex) => {
    return regex.test(field);
  };

  const handleNameChange = (e) => {
    const isValid = validate(e.target.value, fieldValidationRegex.name);
    if (isValid)
      setRegisterInfo({
        name: e.target.value,
        email: registerInfo.email,
        password: registerInfo.password,
      });
    setNameValid(isValid);
  };

  const handleEmailChange = (e) => {
    const isValid = validate(e.target.value, fieldValidationRegex.email);
    if (isValid)
      setRegisterInfo({
        email: e.target.value,
        password: registerInfo.password,
        name: registerInfo.name,
      });
    setEmailValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const isValid = validate(e.target.value, fieldValidationRegex.password);
    if (isValid)
      setRegisterInfo({
        password: e.target.value,
        name: registerInfo.name,
        email: registerInfo.email,
      });
    setPasswordValid(isValid);
  };

  const handleConfirmPasswordChange = (e) => {
    const isValid = e.target.value === registerInfo.password;

    setConfirmPasswordValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValid && passwordValid && nameValid) {
      fetch(
        `https://localhost:7171/api/LoginUser?name=${registerInfo.name}&email=${registerInfo.email}&password=${registerInfo.password}`,
        {
          method: "POST",
          mode: "cors",
        }
      )
        .then((response) => {
          if (response.status === 200) {
            handleClick();
          } else if (response.status === 404) {
            throw new Error("Resource not found");
          } else if (response.status === 500) {
            throw new Error("Internal server error");
          } else {
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
      <div className="card" style={{ transform: "translate(0px, -3rem)" }}>
        <LoginCardLayout
          className="card-body p-5"
          style={{ height: "80vh", display: "flex", justifyContent: "center" }}
        >
          <h1 style={{ paddingBottom: "2rem" }}>Registration</h1>
          <form onSubmit={handleSubmit}>
            <div className="col-md-4 pb-4">
              <label htmlFor="email" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${nameValid ? "" : "is-invalid"}`}
                id="name"
                style={{ width: "40vh" }}
                onChange={handleNameChange}
                required
              />
              {!nameValid && (
                <div className="invalid-feedback" style={{ width: "30vh" }}>
                  Invalid Name.
                </div>
              )}
            </div>
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
            <div className="col-md-4 pb-4">
              <label
                htmlFor="password"
                className="form-label"
                style={{ width: "20vh" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  confirmPasswordValid ? "" : "is-invalid"
                }`}
                id="password"
                style={{ width: "40vh" }}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div className="mb-3 form-check pb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember password
              </label>
            </div>
            <a href="login">Have an Account? Log in Here</a>
            <div className="col-12 pt-3">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "35%" }}
              >
                Register
              </button>
            </div>
          </form>
        </LoginCardLayout>
      </div>
    </StyledLoginPage>
  );
};
