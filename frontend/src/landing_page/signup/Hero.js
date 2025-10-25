import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Hero() {
  const navigate = useNavigate();
   const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
   const { email, password, username } = inputValue;

   const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, token } = data;
      if (success) {
        localStorage.setItem("token", token);
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 1000);
      } else {
        handleError(message);
        setTimeout(() => {
    navigate("/login"); 
  }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <div className="container p-5">
      <div className="row text-center text-muted">
        <h1 className="fs-3">
          Open a free demat and trading account online
        </h1>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
      </div>

      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/account_opens.svg" alt="Account Opening" />
        </div>

        <div className="col-6 p-5">
          <h2 className="mb-2 text-center fs-4">Signup now</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email" className="form-label mb-3">
                <i className="fa fa-envelope" aria-hidden="true"></i> Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="name@example.com"
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username" className="form-label mb-3">
                <i className="fa fa-pencil" aria-hidden="true"></i> Username
              </label>
              <input
                type="text"
                className="form-control"
                id="Username"
                name='username'
                value={username}
                placeholder="xyz"
                onChange={handleOnChange}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="form-label mb-3">
                <i className="fa fa-lock" aria-hidden="true"></i> Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                aria-describedby="passwordHelpBlock"
                name='password'
                value={password}
                placeholder="*****"
                onChange={handleOnChange}
              />
            </div>

            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8–20 characters long, contain letters, numbers and special characters, and must not contain spaces or emoji.
            </div>

            <div
              style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
            >
              <button type='submit'
                className="btn btn-primary fs-6 text-center"
                style={{ width: "20%", height: "2.5rem", marginRight: "1rem" }}
              >
                Submit
              </button>
              <p className="mb-0 me-1">Already have an account?</p>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Hero;
