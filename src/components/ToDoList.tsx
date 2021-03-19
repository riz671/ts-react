import React from "react";

type oneTodo = {
  id: string;
  text: string;
}[];

interface ToDoListProps {
  todos: oneTodo;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={`${todo.id}`}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default ToDoList;
