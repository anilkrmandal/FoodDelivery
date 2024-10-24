import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setErrorMessage(null); // Clear previous error messages

    try {
      const response = await fetch("http://localhost:8000/api/login", { // Updated endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (!response.ok) {
        // Response error handling
        if (response.status === 401) {
          setErrorMessage("Invalid credentials. Please check your email and password.");
        } else if (response.status >= 500) {
          setErrorMessage("Server error. Please try again later.");
        } else {
          setErrorMessage("Unexpected error occurred.");
        }
      } else {
        // Successful login
        localStorage.setItem("authToken", json.authToken);
        console.log("Auth Token stored: ", localStorage.getItem("authToken")); // This can be removed in production
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log("Error during login:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          {/* Show error message */}
          {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}

          <button
            type="submit"
            className="m-3 btn btn-success"
            disabled={isLoading || !credentials.email || !credentials.password} // Disable button if loading or invalid input
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>
        </form>
      </div>
    </div>
  );
}
