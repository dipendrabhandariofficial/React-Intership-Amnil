import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Contactus from '../pages/Contactus';
import Aboutus from '../pages/Aboutus';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Setting from '../pages/Setting';
import Notfound from '../pages/Notfound';
import Students from '../pages/Students';
import StudentDetailsPage from '../pages/StudentDetailsPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/:studentId" element={<StudentDetailsPage />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="setting" element={<Setting />} />
                </Route>

                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
