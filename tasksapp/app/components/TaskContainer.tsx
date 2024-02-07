import { Task } from "../interfaces/tasks.intecerface";
import { TaskCard } from "./TaskCard";

type Props = {
  tasksDB: Task[];
};

export function TaskContainer({ tasksDB }: Props) {
  return tasksDB.map((task) => <TaskCard key={task.title} data={task} />);
}
