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
          {/*TODO feedback: 组件划分不够合理，划分层次不够。这里应该在TraineeList的上层再划分出一个父组件：home page*/}
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
