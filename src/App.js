/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SuccessfulLogin from './pages/SuccessfulLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={HomePage()} />
        <Route exact path="/login" element={LoginPage()} />
        <Route exact path="/signup" element={SignUpPage()} />
        <Route exact path="/success" element={<PrivateRoute component={() => SuccessfulLogin()} />} />
      </Routes>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userToken = localStorage.getItem('userToken');
  return (
    <Route
      {...rest}
      render={(props) => (userToken === undefined || userToken === 'undefined' || userToken === '' || userToken === null ? (
        <Navigate
          to={{
            pathname: '/login',
          }}
        />

      ) : (
        <Component {...props} />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default App;
