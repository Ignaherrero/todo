import React from "react";
import { generate as id } from "shortid";
import Delete from "../button/Delete";

// Styled-components
import ContainerTask from "./ContainerTask";
import Task from "./Task";

const TaskLists = ({
  selected,
  localArray,
  handleCompleteTask,
  handleDeleteTask,
  handleDeleteAll,
  completed,
}) => {
  return (
    <>
      <ContainerTask selected={selected}>
        {localArray.map((item) => {
          return (
            <Task
              handleCompleteTask={() => handleCompleteTask(item.id)}
              handleDeleteTask={(e) => handleDeleteTask(item.id, e)}
              id={item.id}
              isDone={item.isDone}
              key={id()}
              selected={selected}
              task={item.task}
            />
          );
        })}
      </ContainerTask>

      <Delete
        handleDeleteAll={handleDeleteAll}
        completed={completed}
        selected={selected}
      />
    </>
  );
};

export default TaskLists;
