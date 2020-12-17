import React, {Component} from 'react';
import User from "../oneuser/User";

class AllUsers extends Component {

    state = {users : []};

    constructor() {
        super();
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(user => <User item = {user} key = {user.id}/>)
                }
            </div>
        );
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersfromAPI => {
                this.setState({users: usersfromAPI})
            });
    }
}

export default AllUsers;