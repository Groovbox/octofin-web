// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './views/Settings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/settings" element={<Settings />} />
                {/* Add more routes here as needed */}
            </Routes>
        </Router>
    );
}

export default App;
