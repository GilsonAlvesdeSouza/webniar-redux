import React, {Component} from 'react';
import {Input, Button, List} from '../../components';

class App extends Component {
    state = {
        input: '',
    };

    todoList = [
        {
            id: 1,
            name: 'Sapato',
        }, {
            id: 2,
            name: 'Camisa',
        }, {
            id: 3,
            name: 'Calça',
        }, {
            id: 4,
            name: 'Cinto',
        }
    ];

    handleOnClick = () => {
        alert(this.state.input);
    }

    handleOnChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    }

    render() {
        return (
            <>
                <List todoList={this.todoList}/>
                <Input onChange={this.handleOnChange}/>
                <Button onClick={this.handleOnClick}>clique aqui</Button>
            </>
        );
    }
}

export default App;