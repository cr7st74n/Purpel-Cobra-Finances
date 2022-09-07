import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import { isAuthenticated } from './utils/auth';
//pages
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import Register from './pages/Register';
import Login from './pages/Login';
//Components
import Footer from "./components/Footer"
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_data = isAuthenticated();
    
    if (user_data) setUser(user_data);
  }, []);

  return (
    <div className="App">
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          {user && <Route path="/dash" element={<Dashboard user={user}/>}/>}
          <Route path="/stats" element={<Stats />}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/register" element={<Register setUser={setUser}/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
