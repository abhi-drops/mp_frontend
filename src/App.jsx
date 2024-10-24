import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import MyCircles from './pages/MyCircles';
import Auth from './pages/Auth';
import Circle from './pages/Circle';
import Emergencies from './pages/Emergencies';
import Events from './pages/Events';
import UserPage from './pages/UserPage';
import Navbar from './assets/components/Navbar'; // Assuming you have a Navbar component
import AdminHome from './pages/AdminHome';
import AdminReport from './pages/AdminReport';
import AdminTools from './pages/AdminTools';
import AdminNavBar from './assets/components/AdminNavBar';

function App() {
  const location = useLocation();

  // Paths where you don't want to show the Navbar
  const noNavbarPaths = ['/login', '/register', '/userpage', '/adminhome', '/adminreport', '/admintools'];
  // Paths where you don't want to show the AdminNavbar
  const noAdminPaths = ['/login', '/register', '/circle', '/events', '/emergencies', '/userpage','/home'];

  // Check if the current path matches any of the noNavbarPaths
  const shouldShowNavbar = !noNavbarPaths.some(path => location.pathname.startsWith(path));
  // Check if the current path matches any of the noAdminPaths
  const shouldShowAdminNavbar = !noAdminPaths.some(path => location.pathname.startsWith(path));

  // Paths that belong to admin routes
  const adminPaths = ['/adminhome', '/adminreport', '/admintools'];



  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowAdminNavbar && <AdminNavBar />}

      <Routes>
        <Route path='/home' element={<MyCircles />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/circle/:id' element={<Circle />} />
        <Route path='/circle/:id/:postid' element={<Circle />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<Events />} />
        <Route path='/emergencies' element={<Emergencies />} />
        <Route path='/emergencies/:id' element={<Emergencies />} />
        <Route path='/userpage/:id' element={<UserPage />} />

        {/* admin */}
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/adminreport' element={<AdminReport />} />
        <Route path='/admintools' element={<AdminTools />} />

        <Route path='*' element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
