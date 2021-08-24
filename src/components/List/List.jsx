const List = ({todoList}) => (
    <ul>
        {todoList.map(({id, name}) => {
            return (
                <li key={id}>{name}</li>
            );
        })}
    </ul>
);

export default List;