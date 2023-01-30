import React from "react";
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import TodoItem from "../interface";
import CheckIcon from "@atlaskit/icon/glyph/check";
import TrashIcon from "@atlaskit/icon/glyph/trash";

const ButtonStyle = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &:hover {
    .check-icon {
      display: inline-block;
    }
    .delete-icon{
      display: inline-block;
    }
  }

  .check-icon,.delete-icon {
    display: none;
    font-size: 12px

    &:hover {
      background-color: #e2e2e2;
    }
  }
`;

export default function Todo(props: {
  todo: TodoItem;
  onCheckBtnClick: Function;
  onDeleteBtnClick: Function;
}) {
  return (
    <ButtonStyle
      onClick={() => props.onCheckBtnClick(props.todo.id)}
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none",
      }}
      shouldFitContainer
      iconAfter={
        <div>
          <span
            className="check-icon"
            style={{
              display: props.todo.isCompleted ? "inline-block" : "none"
            }}
            onClick={() => props.onCheckBtnClick(props.todo.id)}
          >
            <CheckIcon primaryColor="#4fff4f" label={""} />
          </span>
          <span
            className="delete-icon"
            onClick={() => props.onDeleteBtnClick(props.todo.id)}
          >
            <TrashIcon primaryColor="red" label={""} />
          </span>
        </div>
      }
    >
      {props.todo.name}
    </ButtonStyle>
  );
}
