import { Task } from "../interfaces/tasks.intecerface";

type Props = {
  data: Task;
};

export function TaskCard({ data }: Props) {
  return (
    <>
      <div>
        <span>{data.title}</span>
        <p>{data.task}</p>
        {data.done ? <span>DONE</span> : <span>NOT DONE</span>}
      </div>
    </>
  );
}
