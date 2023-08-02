function TodoItem(props) {
    return (
      <li>
        <span> v {props.completed} </span>
        <p> {props.text} </p>
        <span> v </span>
      </li>
    );
  }
  export {TodoItem};