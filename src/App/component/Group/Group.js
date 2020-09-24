import React, { Component } from 'react';
import Trainee from '../TraineeList/Trainee/Trainee';
import './Group.scss';

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVisible: false,
            inputValue: '',
        };
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        if (inputValue) {
            const url = `http://localhost:8080/trainees/groups/${this.props.groupId}/${inputValue}`;
            const params = {
                method: 'POST',
            };
            fetch(url, params).then(() => this.props.getGroupList());
        }

        this.setState({
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = (input) => {
        this.input = input;
    };

    render() {
        if (this.props.group.traineeList.length <= 0) {
            return null;
        }
        return (
            <div className="group">
                <div className="groupHeader">
                    {this.state.inputVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            className="tag-input"
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputConfirm}
                            onPressEnter={this.handleInputConfirm}
                        />
                    )}
                    {!this.state.inputVisible && <Tag onClick={this.showInput}>{this.props.group.name}</Tag>}
                </div>
                <div className="groupMain">
                    {this.props.group.traineeList.map((trainee) => (
                        <Trainee key={trainee.id} traineeId={trainee.id} traineeName={trainee.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Group;
