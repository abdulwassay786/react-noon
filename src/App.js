import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import Slider from './components/pages/Slider';
import Categories from './components/pages/Categories';
import Recommended from './components/pages/Recommended';


function App() {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Recommended/>
        </div>
    );
}

export default App;