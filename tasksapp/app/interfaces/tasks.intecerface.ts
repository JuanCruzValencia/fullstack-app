export interface NewTask {
  title: string;
  task: string;
  done?: boolean;
}

export interface UpdateTask {
  title?: string;
  task?: string;
  done?: boolean;
}

export interface Task {
  title: string;
  task: string;
  done: boolean;
}
