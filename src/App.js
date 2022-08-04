import './App.css';
import React from 'react';
import CarList from './components/CarList';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewCar from './components/NewCar';

// render carlist
function App() { 
    return (
    <div className="App">
   <NavBar />
   <Switch>
    <Route exact path="/" >
      <Home />
    </Route>
    <Route path="/carlist">
      <CarList />
    </Route>
    <Route path="/newcar">
      <NewCar />
    </Route>
   </Switch>
      
    </div>
  );
}

export default App;
