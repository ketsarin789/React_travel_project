import React from 'react';
import Header from './components/HeaderComponent'
import Footer from './components/Footer'
import TravelInfo from './components/TravelInfo';
import Home from './components/HomeComponent';
import Contact from './components/ContactComponent';
import { BrowserRouter } from "react-router-dom";
import {Switch,  Route } from "react-router-dom";
import './App.css';

function App(){
  return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <TravelInfo />
          <Home />
          <Footer />
        </div>
        <Switch>
        <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
  );
}


export default App;
