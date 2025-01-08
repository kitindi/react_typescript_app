// define the type of the tasks
export type tasksType = { id: number; name: string; completed: boolean };
// export type tasksType = { id: number; name: string; completed: boolean }[];

export type HeaderProps = {
  numberOfCompleted: number;
  totalNumberofTasks: number;
};
