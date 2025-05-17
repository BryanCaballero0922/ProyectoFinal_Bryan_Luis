import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
    const [items, setItems] = useState([{title:"Programacion web", 
        description:"Proyecto Final"}]);
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={
                    <div>                        <TopNavbar />
                        <Footer />

                            <Routes>
                                <Route path="/home" element={<Home items={items} />} />
                            </Routes>
                        </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
