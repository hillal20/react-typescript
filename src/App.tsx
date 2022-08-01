import React, { useRef, useState, useContext } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Task } from "./models/Task";
import TasksList from "./components/TasksList";
import Header from "./components/reactChildProp";
import { red_background } from "./components/inputFieldStyle";
import { taskContext } from "./contexts/tasksContext";
import { ThemeProvider, ThemeContext } from "./contexts/themeContext";
import ClassComponent from "./components/classComponents/ClassComponent";
import {
  PassingCompAsPropsTwo,
  PassingCompAsPropsOne,
} from "./components/passingCompAsProp/passingCompAsProp";
import GenericsList from "./components/generics/geneticList";
import RestrictedProps from "./components/restrictedProps/restrictedProps";
import MaterialUIComponent from "./components/WrappingComponents/metrialUIpropsTypeExtraction";
import WrappingComponent from "./components/WrappingComponents/WrappingComponents";
import PolymorphicComponent from "./components/polymorphicComponent/PolymoriphicComponent";
const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);
  /*
    if the useState is receiving an object ==> UserModel {name, lastName},
    we could write it this way as well:  useState({} as UseModel)
    this will generate no bugs in the future in the object passed is empty 
   */

  const { themeCss } = useContext(ThemeContext);
  console.log(" task ----> ", task);
  console.log(" tasks ----> ", tasks);

  return (
    <ThemeProvider>
      <taskContext.Provider value={{ task, tasks, tasksList: tasks, divRef }}>
        <div style={{ ...themeCss }}>
          <div className="App">
            <Header>
              <h1>Hello word </h1>
            </Header>

            <span> Tasks </span>
            <InputField
              task={task}
              setTask={setTask}
              setTasks={setTasks}
              divRef={divRef}
              inputStyles={red_background}
            />
            <TasksList divRef={divRef} tasksList={tasks} />
            <ClassComponent
              message={"the proper number after decreasing is "}
            />
            <PassingCompAsPropsTwo
              isLoggedIn={true}
              component={<PassingCompAsPropsOne name="hello word" />}
            />
            <GenericsList tasks={tasks} />
            <RestrictedProps id={1} name='hill'/>
            <WrappingComponent variant="primary"> 
                <p> wrapping  component</p>
            </WrappingComponent>
            <MaterialUIComponent  variant="primary" count={4} aria={'triangle'}/>
            <PolymorphicComponent/>
          </div>
        </div>
      </taskContext.Provider>
    </ThemeProvider>
  );
};
export default App;
