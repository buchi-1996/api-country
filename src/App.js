import React from 'react'
import Header from '../src/components/Header';
import Country from '../src/components/Country';
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
           <h1>i am a detail page</h1>
         </Route>
         <Route path="/">
           <h1>i am a home page</h1>
           <Header />
           <Country />
         </Route>
       </Switch>
     </Router>
    </div>
  )
}

export default App

