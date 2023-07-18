import './App.css';
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import HomePageEmployee from "./Components/HomePageEmployee";
import HomePageManager from './Components/HomePageManager';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/manager/home" element={<HomePageManager />} />
                <Route path="/employee/home" element={<HomePageEmployee />} />
            </Routes>
        </Router>
    );
};

export default App;
