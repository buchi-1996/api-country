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
      <Header />
       <Switch>
         <Route path="/details/:name">
           <Details />
         </Route>
         <Route path="/">
           <Country />
         </Route>
       </Switch>
     </Router>
    </div>
  )
}

export default App

