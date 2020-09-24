import React, { Component } from 'react';
import axios from 'axios';
import Group from '../Group/Group';
import './GroupList.scss';

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupResponse: [],
        };
    }

    componentDidMount() {
        this.getAllGroups();
    }

    getAllGroups = async () => {
        const url = 'http://localhost:8080/groups';
        const groupResponse = await axios.get(url);
        this.setState({ groupResponse });
    };

    createRandomGroups = () => {
        const url = 'http://localhost:8080/groups';
        axios.post(url);
    };

    render() {
        return (
            <div className="groups_list">
                <header className="header">
                    <span className="header_title">分组列表</span>
                    <button type="button" className="header_group" onClick={this.createRandomGroups}>
                        分组学员
                    </button>
                </header>
                <main className="main">
                    {this.state.groupResponse?.map((group, index) => (
                        <Group group={group} index={index} getGroups={this.getGroups} />
                    ))}
                </main>
            </div>
        );
    }
}

export default GroupList;
