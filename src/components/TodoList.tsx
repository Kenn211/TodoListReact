import React from "react";
import Todo from "./Todo";
import TodoItem from "../interface";

export default function TodoList(props: {
  todoList: TodoItem[],
  onCheckBtnClick: Function,
  onDeleteBtnClick: Function
}) {
  return (
    <>
      {props.todoList.map((todo: TodoItem) => (
        <Todo
          onCheckBtnClick={props.onCheckBtnClick}
          onDeleteBtnClick={props.onDeleteBtnClick}
          todo={todo}
          key={todo.id}

        />
      ))}
    </>
  );
}
