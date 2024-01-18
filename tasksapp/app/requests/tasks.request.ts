import { NewTask, UpdateTask, Task } from "../interfaces/tasks.intecerface";
import { ServerRest } from "./backend";
import { ClientRest } from "./frontend";

export async function getAllTasks(): Promise<Task[]> {
  const { data } = await ServerRest.get<Task[]>("/tasks");

  return data;
}

export async function postTask(task: NewTask): Promise<Task> {
  const { data } = await ClientRest.post("/tasks", task);

  return data;
}

export async function updateTask(id: string, task: UpdateTask): Promise<Task> {
  const { data } = await ServerRest.put(`/tasks/${id}`, task);

  return data;
}

export async function deleteTaks(id: string): Promise<void> {
  const { data } = await ServerRest.delete(`/tasks/${id}`);

  console.log(data);
}
