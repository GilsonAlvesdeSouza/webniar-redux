import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Input, Button, List} from '../../components';
import {addTodo} from '../../store';

class App extends Component {
    state = {
        input: '',
    };

    handleOnClick = () => {
        alert(this.state.input);
    }

    handleOnChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    }

    render() {
        const {todoList} = this.props;

        return (
            <>
                <List todoList={todoList}/>
                <Input onChange={this.handleOnChange} value={this.input}/>
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