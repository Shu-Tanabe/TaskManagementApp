import { atom, selector } from 'recoil';
import type { TagType } from '../../models/TagModel';
import { TagData } from '../../test/DemoData';

export const tagState = atom<TagType[]>({
  key: 'tagState',
  default: selector<TagType[]>({
    key: 'savedTagState',
    get: () => {
      const tagData = TagData;
      return tagData;
    },
  }),
});
