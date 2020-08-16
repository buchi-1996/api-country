import React from 'react'
import Header from '../src/components/Header';
import Country from '../src/components/Country';
import Details from '../src/components/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/details">
         <Header />
           <Details />
         </Route>
         <Route path="/">
           <Header />
           <Country />
         </Route>
       </Switch>
     </Router>
    </div>
  )
}

export default App

