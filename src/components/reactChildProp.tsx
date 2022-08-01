import React, { useContext, useReducer } from "react";
import { HeaderPropsType } from "./headerPropsTypes";
import { taskContext } from "../contexts/tasksContext";
import { tasksReducer } from "../state/taskReducer";

const Header = ({ children }: HeaderPropsType) => {
  const initialState = { count: 0 }
  const [reducerState, dispatch] = useReducer(tasksReducer, initialState);
  const state = useContext(taskContext);
  console.log("  state ====> ", state);

  const incrementHandler = (e: React.MouseEvent) => {
    dispatch({ type: "add count" });
  };
  return (
    <div style={{ display:'flex', flexDirection: 'column'}}>
      <div>{children}</div>
      counter: {reducerState.count}
      <button onClick={incrementHandler}> increment</button>
    </div>
  );
};

export default Header;
