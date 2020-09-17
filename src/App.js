import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Search } from './components/Search/Search';
import NoMatch from './components/NoMatch/NoMatch';
export const DestinationContext = createContext()
export const UserContext = createContext()

function App() {
  const [destination, setDestination] = useState("Cox's Bazar")
  const [user, setUser] = useState({
    name: '',
    first: '',
    second: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: ''
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <DestinationContext.Provider value={[destination, setDestination]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/search">
              <Search />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </DestinationContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
