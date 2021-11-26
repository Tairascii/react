import React from 'react'
import './Friends.css'

export default function Chosenfriend({ name, age, country}) {
    return (
        <div className="card">
            <img src={'https://via.placeholder.com/350x150?text='+name} alt="friend's img"/>
            <div className="body">
                <h5>{name}</h5>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
            </div>
        </div>
    )
}
