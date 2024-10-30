import './css/Navbar.css';
import './css/App.css';
import './css/Home.css';
import './css/Showcase.css';
import './css/Footer.css';
import './css/SignUp.css';
import './css/Home-lf.css';
import './css/report-form.css';
import './css/showcase-lf.css';
import './css/review.css';
import './css/finder.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import BlacktoBlue from './components/BlacktoBlue';
import BluetoBlack from './components/BluetoBlack';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Homelf from './components/Homelf';
import Showcaselostandfound from './components/Showcaselostandfound';
import Review from './components/Review';
import Toblue from './components/Toblue';
// import Toblue from './components/Finder';
import Finder from './components/Finder';
import Tofinderblue from './components/FadeToFinderBlue';
import LfState from './context/LfState';

function App() {
  return (
    <LfState>
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className='home'>
                <Home />
              </section>
              <BlacktoBlue />
              <Showcase />
              <Footer />
              <GoTop />
            </>
          }
        />
        <Route
          path="/lost-found"
          element={
            <>
              <section className='home'>
                <Homelf/>
              </section>
              <BlacktoBlue />
              <Showcaselostandfound />
              <BluetoBlack/>
              <Review/>
              <Toblue />
              <Footer />
              
              <GoTop />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
            <div className="nav-body">
              <SignUp />
              <Footer />
            </div>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
            <div className="nav-body">
              <Login />
              <Footer />
            </div>
            </>
          }
        />
        <Route
          path="/forget-password"
          element={
            <>
            <div className="nav-body">
              <ResetPassword />
              <Footer />
            </div>
            </>
          }
        />
        <Route
          path="/finder"
          element={
            <>
            <Finder/>
            <Tofinderblue />
            <Footer />
            <GoTop />
            </>
          }
        />
      </Routes>
    </Router>
    </LfState>
  );
}

export default App;
