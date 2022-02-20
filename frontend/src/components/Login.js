import React from 'react'

// This function returns the login form (Username, Password) visible to the user
function Login() {
    return (
      <div className="container-md" style={{marginTop: "30px"}}>
        <h2 className="title-login-form">Please Login!</h2>
        <form className="loginForm" style={{marginTop: "30px"}}>
          <div className="row mb-3">
            <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Enter username" className="col-sm-10" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input type="password" placeholder="Enter password" className="col-sm-10" />
            </div>
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>
        <div className="container-signup">
        <p className="title-no-account" style={{marginTop: "30px"}}>No account yet? <a href="/">Sign up</a>.</p>
        </div>
      </div>
    )
}

export default Login;
