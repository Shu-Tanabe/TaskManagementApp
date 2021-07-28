import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Tag from '../molecules/Tag';
import { tagState } from '../states/rootStates/tags';
import TagTitleSpace from '../molecules/TagTitleSpace';

const TagsStyle = styled.section`
  width: 12vw;
  height: 100vh;
`;

function Tags(): JSX.Element | null {
  const tags = useRecoilValue(tagState);

  if (!tags) {
    return (
      <div>
        <TagTitleSpace />
        <TagsStyle>
          <p>表示するタグはありません</p>
        </TagsStyle>
      </div>
    );
  }
  return (
    <div>
      <TagTitleSpace />
      <TagsStyle>
        {tags.map((tag) => (
          <Tag key={tag.tagId} tag={tag} />
        ))}
      </TagsStyle>
    </div>
  );
}

export default Tags;
