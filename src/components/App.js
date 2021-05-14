import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddRoom } from './Rooms/AddRoom';
import { BookRoom } from './Rooms/BookRoom';
import { Home } from './Home';

function App(props) {
  const [counter, setCounter] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path='/addRoom' component={AddRoom}></Route>
        <Route path='/bookRoom' component={BookRoom}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default hot(App);
