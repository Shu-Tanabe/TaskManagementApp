import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Tag from '../molecules/Tag';
import { tagState } from '../states/rootStates/tags';

const TagsStyle = styled.section`
  height: 150vh;
  width: auto;
  position: relative;
  flex-direction: column;
`;

function Tags(): JSX.Element | null {
  const tags = useRecoilValue(tagState);

  if (!tags) {
    return (
      <div>
        <TagsStyle>
          <p>表示するタグはありません</p>
        </TagsStyle>
      </div>
    );
  }
  return (
    <TagsStyle className="tags">
      {tags.map((tag) => (
        <Tag key={tag.tagId} tag={tag} />
      ))}
    </TagsStyle>
  );
}

export default Tags;
