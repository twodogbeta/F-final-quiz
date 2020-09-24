import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'antd';
import './TraineeList.scss';
import axios from 'axios';
import Trainee from './Trainee/Trainee';

class TraineeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainees: [],
        };
    }

    componentDidMount() {
        this.getAllUngroupedTrainees();
    }

    getAllUngroupedTrainees = async () => {
        const url = 'http://localhost:8080/trainees?grouped=false';
        const response = await axios.get(url);
        const trainees = await response.data;
        this.setState({trainees});
    };

    deleteTrainee = async (traineeId) => {
        const url = `http://localhost:8080/trainees/${traineeId}`;
        await axios.delete(url);
    };

    deleteConfirmForm = (traineeId, deleteTrainee, getAllUngroupedTrainees) => {
        Modal.confirm({
            content: '确认删除此学员吗？',
            async onOk() {
                await deleteTrainee(traineeId);
                await getAllUngroupedTrainees();
            },
        });
    };

    render() {
        return (
            <div className="trainee_list">
                <header className="header">
                    <span className="header_title">学员列表</span>
                </header>
                <main className="main">
                    {this.state.trainees.map((trainee) => (
                        <Trainee
                            key={trainee.id}
                            traineeId={trainee.id}
                            traineeName={trainee.name}
                            displayDeleteConfirm={() =>
                                this.deleteConfirmForm(trainee.id, this.deleteTrainee, this.getAllUngroupedTrainees)
                            }
                        />
                    ))}
                    <Link to="/traineeform" className="add_trainee">
                        + 添加学员
                    </Link>
                </main>
            </div>
        );
    }
}

export default TraineeList;
