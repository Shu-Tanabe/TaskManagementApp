import { atom, selector } from 'recoil';
import type { GoalType } from '../../models/GoalModel';
import { GoalData } from '../../test/DemoData';

export const goalState = atom<GoalType[]>({
  key: 'goalState',
  default: selector<GoalType[]>({
    key: 'savedGoalState',
    get: () => {
      const goalData = GoalData;
      return goalData;
    },
  }),
});
