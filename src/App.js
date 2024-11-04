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
import './css/Blog.css';
import './css/profile.css';
import './css/ClaimItem.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import BlacktoBlue from './components/BlacktoBlue';
import ClaimItem from './components/ClaimItem';
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
import BlogReview from './components/BlogReview';
import Toblue from './components/Toblue';
import Profile from './components/Profile';
// import Toblue from './components/Finder';
import Finder from './components/Finder';
import Tofinderblue from './components/FadeToFinderBlue';
import LfState from './context/LfState';
import ScrollToTop from './components/ScrollToTop';
import ResetPasswordForm from './components/ResetPasswordForm';
import { UserState } from './context/UserState';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <LfState>
      <UserState>
        <Router>
          <ScrollToTop />
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
                    <Homelf />
                  </section>
                  <BlacktoBlue />
                  <Showcaselostandfound />
                  <BluetoBlack />
                  <Review />
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
              path="/profile"
              element={
                <>
                  <div className="nav-body">
                    <Profile />
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
            <Route path="/reset-password/:token" element={
              <>
                <div className="nav-body">
                  <ResetPasswordForm />
                  <Footer />
                </div>
              </>
            } />
            <Route path="/edit-profile" element={
              <>
                <div className="nav-body">
                  <EditProfile />
                  <Footer />
                </div>
              </>
            } />
            <Route
              path="/finder"
              element={
                <>
                  <Finder />
                  <Tofinderblue />
                  <Footer />
                  <GoTop />
                </>
              }
            />
            <Route
              path="/finder/type/:type"
              element={
                <>
                  <Finder />
                  <Tofinderblue />
                  <Footer />
                  <GoTop />
                </>
              }
            />
            <Route
              path="/claimItem/:id"
              element={
                <>
                  <ClaimItem/>
                  <Tofinderblue />
                  <Footer />
                  <GoTop />
                </>
              }
            />
            <Route
              path="/finder/location/:location"
              element={
                <>
                  <Finder />
                  <Tofinderblue />
                  <Footer />
                  <GoTop />
                </>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <>
                  <Blog />
                  <BluetoBlack />
                  <BlogReview />
                  <Toblue />
                  <Footer />
                  <GoTop />
                </>
              }
            />
          </Routes>
        </Router>
      </UserState>
    </LfState>
  );
}

export default App;
