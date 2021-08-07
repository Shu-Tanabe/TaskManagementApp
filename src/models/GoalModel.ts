export type GoalType = {
  id: string;
  title: string;
  description: string;
  status: 'done' | 'doing' | 'to do';
  started: string;
  finished: string;
  working: number;
};
