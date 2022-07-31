import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={HomePage()} />
        <Route exact path="/login" element={LoginPage()} />
        <Route exact path="/signup" element={SignUpPage()} />
      </Routes>
    </Router>
  );
}

export default App;
