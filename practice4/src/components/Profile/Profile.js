import React from 'react'
import './Profile.css'
export default function Profile() {
    return (
        <div className="profile">
            <div className="container">
                <h1>Profile page</h1>
                <div className="data">
                    <img src="https://via.placeholder.com/150?text=Pablo" alt='pablo img'/>
                    <div>
                        <h2>Pablo Jackson</h2>
                        <p>29 years old...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
