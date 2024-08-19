export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string | Date;
  status: string;
  priority: string;
}
