





import axios from 'axios';
import React, { useState } from 'react';

const UserRegister = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [responseMsg, setResponseMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payloads = { username, password, email, role };

        try {
            const res = await axios.post('http://localhost:4000/api/user/register', payloads);
            setResponseMsg(res.data.message);
        } catch (err) {
            console.log(err);
            setResponseMsg('Registration failed');
        }

        setEmail('');
        setPassword('');
        setRole('');
        setUsername('');
    };

    return (
        <div className="container mt-5" style={{backgroundColor:"black"}}>
            <h1 className="text-center mb-4" style={{color:"white"}}>User Registration</h1>
            <div className="row justify-content-center">
                <div className="col-xxl-12">
                    <div className="card" style={{marginTop:"120px",marginLeft:"180px"}}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
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
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                            {responseMsg && (
                                <div className="mt-3">
                                    <div className={`alert ${responseMsg === 'Registration failed' ? 'alert-danger' : 'alert-success'}`} role="alert">
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

export default UserRegister;



