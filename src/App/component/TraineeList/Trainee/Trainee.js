import React, { Component } from 'react';
import './Trainee.scss';

class Trainee extends Component {
  render() {
    return (
      <div className="trainee" onClick={this.props.displayDeleteConfirm}>
        {this.props.traineeId}.{this.props.traineeName}
      </div>
    );
  }
}

export default Trainee;
