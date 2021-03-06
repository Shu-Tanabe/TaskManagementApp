/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const AppBar = styled.section`
  top: 0%;
  left: 0%;
  color: red;
  width: 100vw;
  height: 6vh;
  background: #ffccbc;
  padding-left: 1vw;
  position: fixed;
`;
const SideNav = styled.section`
  background: #b3e5fc;
  width: 3vw;
  height: 100vh;
  position: fixed;
`;
const Tags = styled.section`
  background: #f0f4c3;
  margin-left: 3vw;
  margin-top: 3vw;
  /* padding-left: 0.5vw; */
  width: 12vw;
  height: 100vh;
  position: fixed;
`;
const TagWrapper = styled.section`
  overflow: auto;
  width: 90%;
  margin-left: 5%;
  padding-top: 6vh;
`;
const Tag = styled.section`
  background: #ce93d8;
  width: 100%;
  height: 5vh;
`;
const Search = styled.section`
  margin-top: 6vh;
  margin-left: 15vw;
  width: 85vw;
  height: 3vw;
  background: #fff9c4;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
`;
const SearchBox = styled.section`
  width: 60vw;
  height: 3vh;
  background: #cfd8dc;
`;
const Contents = styled.section`
  width: 85vw;
  height: 100vh;
  min-height: 100%;
  background: #d7ccc8;
  margin-left: 15vw;
  /* margin-top: 6vh; */
  padding-top: 6vh;
  justify-content: center;
  position: fixed;
  display: flex;
`;
const ContentBoxWrapper = styled.section`
  overflow: auto;
  width: 60vw;
  height: 100vh;
  position: relative;
  /* display: flex; */
  div {
    /* display: block; */
    color: red;
  }
`;
const ContentBox = styled.section`
  width: 60vw;
  height: 16vh;
  background: #ffcc80;
  position: absolute;
  display: block;
`;
function Menu(): JSX.Element {
  return (
    <div style={{ height: '100%' }}>
      <AppBar>App Bar</AppBar>
      <SideNav>Nav</SideNav>
      <Tags>
        <TagWrapper>
          <Tag>Tag</Tag>
        </TagWrapper>
      </Tags>
      <Search>
        <SearchBox>search</SearchBox>
      </Search>
      <Contents>
        <ContentBoxWrapper>
          <div style={{ transform: 'translateY(0)' }}>
            <ContentBox>contents</ContentBox>
          </div>
          <div style={{ transform: 'translateY(19vh)' }}>
            <ContentBox>contents</ContentBox>
          </div>
          <div style={{ transform: 'translateY(38vh)' }}>
            <ContentBox>contents</ContentBox>
          </div>
          <div style={{ transform: 'translateY(57vh)' }}>
            <ContentBox>contents</ContentBox>
          </div>
          <div style={{ transform: 'translateY(76vh)' }}>
            <ContentBox>contents</ContentBox>
          </div>
          <div style={{ transform: 'translateY(95vh)' }}>
            <ContentBox>contents</ContentBox>
          </div>
        </ContentBoxWrapper>
      </Contents>
      {/* <Contents>
          <div>
            <ContentBox>contents</ContentBox>
          </div>
          <div>
            <ContentBox>contents</ContentBox>
          </div>
        </Contents> */}
    </div>
  );
}

export default Menu;
