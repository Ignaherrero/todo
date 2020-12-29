import React from "react";

// Styled-components
import FormStyle from "./FormTaskStyle";

// svg
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Delete } from "../../assets/trashTask.svg";

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
        {/* svg check */}
        <span onClick={handleCompleteTask}>{isDone && <Check />}</span>
        <label htmlFor={id}>
          {task}
          <input
            id={id}
            name="task"
            onChange={handleCompleteTask}
            type="checkbox"
            value={task}
          />
        </label>

        {/* svg delete */}
        {isDone && selected === "Completed" && (
          <button onClick={handleDeleteTask}>
            <Delete />
          </button>
        )}
      </FormStyle>
    </>
  );
};

export default Task;
