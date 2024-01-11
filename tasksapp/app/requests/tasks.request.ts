import { NewTask, UpdateTask, Task } from "../interfaces/tasks.intecerface";
import { ServerRest } from "./backend";

export async function getAllTasks(): Promise<Task[]> {
  const { data } = await ServerRest.get<Task[]>("/api/tasks");

  return data;
}

export async function getOneTask(id: string): Promise<Task> {
  const { data } = await ServerRest.get<Task>(`/api/tasks/${id}`);

  return data;
}

export async function postTask(task: NewTask): Promise<void> {
  const { data } = await ServerRest.post("/api/tasks", task);

  console.log(data);
}

export async function updateTask(
  id: string,
  task: UpdateTask
): Promise<Task> {
  const { data } = await ServerRest.put(`/api/tasks/${id}`, task);

  return data;
}

export async function deleteTaks(id: string): Promise<void> {
  const { data } = await ServerRest.delete(`/api/tasks/${id}`);

  console.log(data);
}
