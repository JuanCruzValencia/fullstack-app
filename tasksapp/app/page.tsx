import Form from "./components/Form";
import { getAllTasks } from "./requests/tasks.request";

export default async function Home() {
  const tasks = await getAllTasks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card-body">
        <h2 className="card-title capitalize">tasks list</h2>
        <p>What are you going to do today?</p>
        <div className="card w-96 glass">
          <div>
            <Form />
          </div>
          <div className="card-actions justify-end">
            <span>
              {tasks.map((task) => {
                return JSON.stringify(task);
              })}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
