import { useNavigate } from "react-router-dom";
import { StyledLoginPage } from "./styleLoginCard";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/welcome");

  return (
    <StyledLoginPage>
      <div class="title" style={{ marginBottom: "2rem" }}>
        <h1>Login</h1>
      </div>
      <div class="card" style={{ width: "50vh", height: "70vh" }}>
        <div class="card-body p-5">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember password
              </label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleClick}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </StyledLoginPage>
  );
};
