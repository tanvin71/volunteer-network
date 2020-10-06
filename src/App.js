import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Events from './Components/Events/Events';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Donation from './Components/Donation/Donation';
import Blog from './Components/Blog/Blog';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
export const UserContext  = createContext()
export const NameContext =  createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [eventName , setEventName] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <NameContext.Provider value={[eventName, setEventName]}>
    <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path ="/event/:eventId">
            <Register></Register>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </NameContext.Provider>
  </UserContext.Provider>
  );
}

export default App;
