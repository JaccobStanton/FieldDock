import "../../CSS/imager_settings.css";
import React, { useEffect } from "react";
import { ReactComponent as FieldDockLogo } from "../../assets/FieldDock-Logo.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  // --------------------------------------------------------------
  useEffect(() => {
    // Save the current body background color
    const originalBackgroundColor = document.body.style.backgroundColor;

    // Set the body background color to black
    document.body.style.backgroundColor = "#000";

    // Reset the body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);
  // --------------------------------------------------------------
  let navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
    console.log(handleButtonClick);
  }
  // --------------------------------------------------------------
  return (
    <div className="login-parent">
      <div className="login-box-main">
        <div className="content-container">
          <div className="svg-container">
            <FieldDockLogo className="login-logo-svg" />
          </div>
          <div className="form-box-login">
            <form>
              <label>Enter Username</label>
              <input type="text" />
              <label>Enter Password</label>
              <input type="password" />
              <div className="login-button-container">
                <button onClick={handleButtonClick}></button>
              </div>
            </form>
          </div>
          <p className="rights-text">
            ©2024 Donald Danforth Plant Science Center
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
