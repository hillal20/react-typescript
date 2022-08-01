import { Task } from "../models/Task";

export interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  divRef: React.RefObject<HTMLDivElement>;
  inputStyles: React.CSSProperties;
}
