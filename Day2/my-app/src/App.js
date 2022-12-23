import logo from './logo.svg';
import './App.css';
import Footer from './shared components/Footer/Footer';
import Header from './shared components/Header/Header';
import React, { Component } from 'react';
import MyComp from './shared components/Header/counter';
function App() {
    return <>
    
        <Header />
        <h1 id='MainHeading'>Gaming Cart</h1>
        <MyComp />

        <Footer />
       

    </>
}

export default App;
