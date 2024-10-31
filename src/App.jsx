import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import MyCircles from './pages/MyCircles';
import Auth from './pages/Auth';
import AddNewCity from './pages/AddNewCity';
import Circle from './pages/Circle';
import Emergencies from './pages/Emergencies';
import Events from './pages/Events';
import UserPage from './pages/UserPage';
import Navbar from './assets/components/Navbar';
import AdminHome from './pages/AdminHome';
import AdminReport from './pages/AdminReport';
import AdminTools from './pages/AdminTools';
import AdminNavBar from './assets/components/AdminNavBar';

function App() {
  const location = useLocation();

  // Paths where you don't want to show the Navbar
  const noNavbarPaths = ['/login', '/register', '/userpage', '/adminhome', '/adminreport', '/admintools'];
  // Paths where you don't want to show the AdminNavbar
  const noAdminPaths = ['/login', '/register', '/circle', '/events', '/emergencies', '/userpage', '/home','/addnewcity'];

  // Check if the current path matches any of the noNavbarPaths
  const shouldShowNavbar = !noNavbarPaths.some(path => location.pathname.startsWith(path));
  // Check if the current path matches any of the noAdminPaths
  const shouldShowAdminNavbar = !noAdminPaths.some(path => location.pathname.startsWith(path));

  // Paths that belong to admin routes
  const adminPaths = ['/adminhome', '/adminreport', '/admintools'];

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return !!sessionStorage.getItem('token');
  };

  // PrivateRoute component to restrict access
  const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

  



  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowAdminNavbar && <AdminNavBar />}

      <Routes>
        <Route path='/home' element={<PrivateRoute element={<MyCircles />} />} />
        <Route path='/addnewcity' element={<PrivateRoute element={<AddNewCity />} />} />
        <Route path='/circle/:id' element={<PrivateRoute element={<Circle />} />} />
        <Route path='/circle/:id/:noteid' element={<PrivateRoute element={<Circle />} />} />
        <Route path='/events' element={<PrivateRoute element={<Events />} />} />
        <Route path='/events/:id' element={<PrivateRoute element={<Events />} />} />
        <Route path='/emergencies' element={<PrivateRoute element={<Emergencies />} />} />
        <Route path='/emergencies/:id' element={<PrivateRoute element={<Emergencies />} />} />
        <Route path='/userpage/:id' element={<PrivateRoute element={<UserPage />} />} />

        {/* admin */}
        <Route path='/adminhome' element={<PrivateRoute element={<AdminHome />} />} />
        <Route path='/adminreport' element={<PrivateRoute element={<AdminReport />} />} />
        <Route path='/admintools' element={<PrivateRoute element={<AdminTools />} />} />

        {/* Public routes */}
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />

        {/* Redirect unknown paths to home */}
        <Route path='*' element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
