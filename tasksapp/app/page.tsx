import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card w-96 glass">
        <div>
          <span>NEW TASK FORM</span>
        </div>
        <div className="card-body">
          <h2 className="card-title capitalize">tasks list</h2>
          <p>What are you going to do today?</p>
          <div className="card-actions justify-end">
            <span>TASKS LIST CONTAINER</span>
          </div>
        </div>
      </div>
    </main>
  );
}
