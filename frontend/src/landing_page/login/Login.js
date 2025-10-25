import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;
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
                "http://localhost:3002/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message ,token} = data;
            if (success) {
                localStorage.setItem("token", token);
                handleSuccess(message);
                setTimeout(() => {
                     window.location.href = "http://localhost:3001/"
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    };
    return (
        <div className='conatiner p-5 m-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/page-otp.svg' style={{ marginLeft: "10rem" }} />
                </div>
                <div className='col-6 p-5' style={{ width: "50%" }}>
                    <h2 className="mb-3 text-center fs-4">Login<i class="fa fa-laptop" aria-hidden="true"></i></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2" style={{ paddingRight: "4rem" }}>
                            <label htmlFor="email" className="form-label mb-3">
                                <i className="fa fa-envelope" aria-hidden="true"></i> Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-2" style={{ paddingRight: "4rem" }}>
                            <label htmlFor="password" className="form-label mb-3">
                                <i className="fa fa-lock" aria-hidden="true"></i> Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                aria-describedby="passwordHelpBlock"
                                value={password}
                                onChange={handleOnChange}
                                name='password'
                                placeholder="*****"
                            />
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
                            <p className="mb-0 me-1">Create New Account?</p>
                            <Link to="/signup" style={{ textDecoration: "none" }}>
                                Signup
                            </Link>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Login;
