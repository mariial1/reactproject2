import React, {Component} from 'react';
import User from "../oneuser/User";

class AllUsers extends Component {

    state = {users: [], chosenOne: null};

    constructor() {
        console.log('const')
        super();
    }

    onSelectUser = (id) => {
        let {users} = this.state;
        let find = users.find (value => value.id === id);
        this.setState({chosenOne: find});
    };

    render() {
        console.log('render')
        let {users, chosenOne} = this.state;
        return (
            <div>
                {
                    users.map(user => <User item = {user} key = {user.id} onSelectUser = {this.onSelectUser}/>)
                }
                {
                    chosenOne && <h2>{chosenOne.id} - {chosenOne.name}</h2>
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