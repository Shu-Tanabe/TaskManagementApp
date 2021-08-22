import { atom } from 'recoil';
// import type { ValidationType } from '../../models/UserModel';

export const passwordLengthState = atom<boolean>({
  key: 'passwordLengthState',
  default: false,
});

export const passwordNumberState = atom<boolean>({
  key: 'passwordNumberState',
  default: false,
});

export const passwordCapitalState = atom<boolean>({
  key: 'passwordCapitalState',
  default: false,
});

export const passwordCharacterState = atom<boolean>({
  key: 'passwordCharacterState',
  default: false,
});
