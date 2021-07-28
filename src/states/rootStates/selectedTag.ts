import { atom } from 'recoil';

export const selectedTagState = atom<number>({
  key: 'selectedTagState',
  default: 1,
});
