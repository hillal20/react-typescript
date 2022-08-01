import { Task } from "../models/Task";

export interface TasksListProps {
    tasksList: Task[];
    divRef: React.RefObject<HTMLDivElement>
}