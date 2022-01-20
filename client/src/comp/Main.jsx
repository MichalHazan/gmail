import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allmails from './Allmails';
import FullMail from './FullMail';
import Login from './Login';
import NewMail from './NewMail';

export default function Main() {
    return <div>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/allmails" element={<Allmails/>}></Route>
            <Route path="/newMail" element={<NewMail />}></Route>
            <Route path="/fullMail" element={<FullMail />}></Route>
        </Routes>
    </div>;
}
