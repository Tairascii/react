import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Friends.css'
export default function Friends() {
  return (
      
    <div className="friends">
    <h1>Friends page</h1>
      <div className="container">
        <ul>
          <li>
            <Link to="/friends/Alex">Alex</Link>
          </li>
          <li>
            <Link to="/friends/John">John</Link>
          </li>
          <li>
            <Link to="/friends/Martha">Martha</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
