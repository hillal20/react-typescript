import React from "react";
import { TasksListProps } from "./TasksListTypes";

const TasksList = ({ tasksList, divRef }: TasksListProps) => {
  return (
    <div>
      {tasksList.map((e) => {
        return (
          <div key={`${e.task}- ${e.id}`} ref={divRef}>
            {e.task}
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
