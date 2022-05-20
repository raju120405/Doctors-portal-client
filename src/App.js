
import './App.css';
import Navbar from './Pages/Shared/navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Shared/navbar/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequreAuth from './Pages/Login/RequreAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="appointment" element={
          <RequreAuth>
            <Appointment />
          </RequreAuth>} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
