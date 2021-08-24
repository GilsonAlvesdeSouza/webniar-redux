import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Input, Button, List} from '../../components';
import {addTodo} from '../../store';

class App extends Component {

    state = {
        input: '',
    };

    handleOnClick = () => {
        const {addTodo} = this.props;
        const {input} = this.state;
        if (input !== '') {
            addTodo(input);
            this.setState({input: ''});
        }
    }

    handleOnChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    }

    render() {
        return (
            <>
                <List/>
                <Input onChange={this.handleOnChange} value={this.state.input}/>
                <Button onClick={this.handleOnClick}>clique aqui</Button>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    todoList: state.todo.list,
});

export default connect(
    mapStateToProps,
    {addTodo}
)(App);