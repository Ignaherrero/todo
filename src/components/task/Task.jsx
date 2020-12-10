import React from "react";

// Styled-components
import FormStyle from "./FormTaskStyle";

const Task = ({
  isDone,
  id,
  task,
  handleCompleteTask,
  handleDeleteTask,
  selected,
}) => {
  return (
    <>
      <FormStyle action="" isDone={isDone}>
        <input
          type="checkbox"
          id={id}
          name="task"
          value={task}
          onChange={handleCompleteTask}
        />
        <span onClick={handleCompleteTask}>
          {isDone && (
            //  svg check
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="22px"
              height="22px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          )}
        </span>

        <label htmlFor={id}>{task}</label>

        {isDone && selected === "Completed" && (
          // svg delete
          <button>
            <svg
              onClick={handleDeleteTask}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#BDBDBD"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        )}
      </FormStyle>
    </>
  );
};

export default Task;
