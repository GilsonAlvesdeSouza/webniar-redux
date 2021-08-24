import {connect} from "react-redux";
import {addTodo} from "../../store";

const List = ({todoList}) => (
    <ul>
        {todoList.map(({id, name}) => {
            return (
                <li key={id}>{name}</li>
            );
        })}
    </ul>
);

const mapStateToProps = (state) => ({
    todoList: state.todo.list,
});

export default connect(
    mapStateToProps,
    {addTodo}
)(List);
