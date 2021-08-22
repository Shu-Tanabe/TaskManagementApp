import { atom, selector, useRecoilState } from 'recoil';
import {
  passwordLengthState,
  passwordNumberState,
  passwordCapitalState,
  passwordCharacterState,
} from '../states/rootStates/validation';

const isSendableState = atom<boolean>({
  key: 'isSendableState',
  default: false,
});

export const passwordValidation = selector<boolean>({
  key: 'passwordValidation',
  get: ({ get }) => {
    const isLength = get(passwordLengthState);
    const isNumber = get(passwordNumberState);
    const isCapital = get(passwordCapitalState);
    const isCharactor = get(passwordCharacterState);
    return isLength && isNumber && isCapital && isCharactor;
  },
});
