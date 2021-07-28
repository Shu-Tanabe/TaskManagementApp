import React from 'react';
import styled from 'styled-components';

const TagTitleSpaceStyle = styled.section`
  height: 6vh;
  width: 100%;
  div {
    padding-left: 4px;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #424242;
    height: 100%;
  }
  p {
    margin: 0 0 0 0;
  }
`;

function TagTitleSpace(): JSX.Element {
  return (
    <TagTitleSpaceStyle>
      <div>
        <p>Tags</p>
      </div>
    </TagTitleSpaceStyle>
  );
}

export default TagTitleSpace;