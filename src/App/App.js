import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TraineeList from "./component/TraineeList/TraineeList";
import TraineeForm from './component/TraineeList/traineeFrom/TraineeForm';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={TraineeList} />
          <Switch>
            <Route exact path="/traineeform" component={TraineeForm} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
