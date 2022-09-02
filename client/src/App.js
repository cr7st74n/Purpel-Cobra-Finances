import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
//Components
import Footer from "./components/Footer"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/page2" element={<Page2 />}/>
          <Route path="/page3" element={<Page3 />}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
