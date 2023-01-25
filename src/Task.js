
export const Task = (props) =>  {
return (
    <li>
        <button className="button2" onClick={() => props.deleteTask(props.id)}>Delete</button>
        <button className="button4" onClick={() => handleCompleted(props.id)}>Unfinish task</button>
        {props.taskName}
    </li>
);
}