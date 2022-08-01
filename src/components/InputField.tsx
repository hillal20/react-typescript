import React from "react";
import { Props } from "./InputFieldTypes";


const InputField: React.FC<Props> = ({ task, setTask, setTasks, divRef, inputStyles }) => {
  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    divRef.current?.focus();
    setTasks((pre) => [...pre, { id: pre.length, task, done: false }]);
  };
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("== click button event ===");
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("== on change  event ===", e.target.value);
    setTask(e.target.value);
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          style={inputStyles}
          name="name"
          placeholder="enter task"
          onChange={onChangeHandler}
          value={task}
        />
        <button type="submit"> Go is here </button>
      </form>
      <button onClick={onClickHandler}> click button event</button>
    </div>
  );
};

export default InputField;
