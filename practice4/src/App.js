import { BrowserRouter as Router, Routes, Route,  Link, Navigate } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Friends from './components/Friends/Friends';
import { useState } from 'react';
import Chosenfriend from './components/Friends/Chosenfriend';
function App() {
  const [authed, setAuthed] = useState(false);
  function logout(){
    setAuthed(false)
  }
  return (
    <div className="App">
      <Router>
        <nav>
        <Link to="/" className="link">
            Home
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
          <Link to="/friends" className="link">
            Friends
          </Link>
          {!authed &&
            <Link to="/login" className="link">
              Login
            </Link>}
          {authed &&
            <span onClick={logout} className="link">Logout</span>
          }
        </nav>
        <Routes>
        {!authed && <Route path="/" element={<div className="home-page">
            <h1>Welcome to the homepage!</h1>
            <h2>You are not authed! Please login in to the system</h2>
          </div>} />
        }
        {authed && <Route path="/" element={<div className="home-page">
            <h1>Welcome to the homepage!</h1>
            <h2>You have successfully authed in your account!<br /> You can now enter your pages</h2>
          </div>} />
        }
        <Route path="/profile" element={
            <CheckForAuth authed={authed}>
               <Profile />
            </CheckForAuth>
          } />
          <Route path="/friends" element={
            <CheckForAuth authed={authed}>
               {<Friends />}
            </CheckForAuth>
          } />
          <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} />} />
          <Route path="friends/Alex" element={<> <Friends /> <Chosenfriend name='Alex' age='35' country='USA' /> </>} />
          <Route path="friends/John" element={<> <Friends /> <Chosenfriend name='John' age='21' country='Netherlands' /> </>} />
          <Route path="friends/Martha" element={<> <Friends /> <Chosenfriend name='Martha' age='25' country='United Kingdom' /> </>} />
        </Routes>
      </Router>
    </div>
  );
}

function CheckForAuth({ authed, children }) {
  return authed ?
        children :
        <Navigate to="/login" replace />
}

export default App;
