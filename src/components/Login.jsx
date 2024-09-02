

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMsg, setResponseMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payloads = { email, password };

        try {
            const res = await axios.post('https://backendreachinbox.onrender.com/api/user/login', payloads);
            // http://localhost:4000/api/user/login
            setResponseMsg(res.data.message);
            setToken(res.data.token);
        } catch (err) {
            console.log(err);
            setResponseMsg(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="container mt-5" style={{backgroundColor:"black"}}>
            <h1 className="text-center mb-4" style={{color:"white"}}>User Login</h1>
            <div className="row justify-content-center">
                <div className="col-xxl-12">
                    <div className="card shadow-sm"style={{marginTop:"220px",marginLeft:"300px"}}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            {responseMsg && (
                                <div className="mt-3">
                                    <div className={`alert ${responseMsg === 'Login successful' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                        {responseMsg}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
