import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { selectedTagState } from '../states/rootStates/selectedTag';
import TagIcon from '../icons/local_offer_black_24dp.svg';
import type { TagType } from '../models/TagModel';

const TagStyle = styled.section<{ isSelected: boolean }>`
  width: 100%;
  height: 5vh;
  background: ${({ isSelected }) => (isSelected ? '#bdbdbd' : '#ffffff')};
  cursor: pointer;
  :hover {
    background: #bdbdbd;
  }
  div {
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
  p {
    display: inline-flex;
    align-items: center;
    margin: 0 0 0 0;
    color: #424242;
  }
  img {
    margin-right: 6px;
    margin-left: 4px;
  }
`;

type TagPropType = {
  tag: TagType;
};

function Tag({ tag }: TagPropType): JSX.Element {
  const [selectedTag, setSelectedTag] =
    useRecoilState<number>(selectedTagState);
  const chengeSelectedTag = () => {
    setSelectedTag(tag.tagId);
    console.log(selectedTag);
  };

  return (
    <TagStyle
      onClick={chengeSelectedTag}
      isSelected={selectedTag === tag.tagId ? true : false}
    >
      <div>
        <p>
          <img src={TagIcon} alt="tag" />
          {tag.tagName}
        </p>
      </div>
    </TagStyle>
  );
}

export default Tag;
