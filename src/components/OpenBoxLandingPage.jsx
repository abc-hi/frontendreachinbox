import React from 'react';
import './OpenBoxLandingPage.css'; 

const OpenBoxLandingPage = () => {
    return (
        <div className='container' style={{ backgroundColor: 'black' }}>
            <div className="sidebar">
                <h2>Menu</h2>
                <ul>
                    <li>
                        <i className="bi bi-house"></i>
                        <span>Home</span>
                    </li>
                    <li>
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </li>
                    <li>
                        <i className="bi bi-envelope"></i>
                        <span>Inbox</span>
                    </li>
                    <li>
                        <i className="bi bi-chat-dots"></i>
                        <span>Chat</span>
                    </li>
                    <li>
                        <i className="bi bi-chat-text"></i>
                        <span>Comments</span>
                    </li>
                    <li>
                        <i className="bi bi-bar-chart"></i>
                        <span>Statistics</span>
                    </li>
                </ul>
            </div>
            <div className="main-content"style={{color:"white", alignContent:"center", marginLeft:"320px"}}>
                <h1 >Welcome to OpenBox </h1>
            </div>
        </div>
    );
};

export default OpenBoxLandingPage;
