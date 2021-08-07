/* eslint-disable react/prop-types */
import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import Tags from '../organisms/Tags';
import GoalsSection from '../organisms/GoalsSection';
import Goals from '../organisms/Goals';
import TagTitleSpace from '../molecules/TagTitleSpace';

const MenuStyle = styled.section`
  width: 85vw;
  height: auto;
  display: flex;
  flex-grow: 1;
  z-index: 1;
`;

const AppBar = styled.div`
  color: red;
  width: 100vw;
  max-width: 100vw;
  height: 6vh;
  background: #ffccbc;
  padding-left: 1vw;
  position: relative;
  z-index: 100;
`;
const SideNavWrapper = styled.div`
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  max-height: 100%;
  position: relative;
  margin-right: 0;
`;
const SideNavStyle = styled.div`
  width: auto;
  background: #b3e5fc;
  height: 100%;
  margin: 0 auto;
  flex-direction: column;
`;

const TagsArea = styled.div`
  position: relative;
  height: 100vh;
  width: 240px;
  overflow: scroll;
`;
const SearchWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  padding-right: 8px;
  padding-left: 8px;
  height: 50px;
  width: 100%;
`;

const Search = styled.div`
  width: 100%;
  height: 50px;
  background: #fff9c4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchBox = styled.section`
  width: 60vw;
  height: 30px;
  background: #cfd8dc;
`;

const GoalsWrapper = styled.div`
  width: 100%;
  height: 150vh;
  margin-bottom: 0;
  /* position: relative; */
  align-items: center;
  justify-content: center;
  overflow: scroll;
  padding: 8px;
`;

const RightArea = styled.div`
  width: 100%;
  height: 100vh;
  /* max-height: 100%; */
  position: relative;
  display: flex;
  flex-direction: column;
`;

function Menu(): JSX.Element {
  return (
    <div
      style={{
        height: '90%',
        width: '100%',
        position: 'relative',
        display: 'flex',
      }}
    >
      <RecoilRoot>
        {/* <AppBar>App Bar</AppBar> */}
        <MenuStyle>
          <SideNavWrapper>
            <SideNavStyle>Nav</SideNavStyle>
          </SideNavWrapper>
          <Suspense fallback={<p>ローディング</p>}>
            <TagsArea className="tags-area">
              <TagTitleSpace />
              <Tags />
            </TagsArea>
          </Suspense>
          <RightArea className="right-area">
            <SearchWrapper className="search-wrapper">
              <Search>
                <SearchBox>search</SearchBox>
              </Search>
            </SearchWrapper>
            <GoalsWrapper className="goals-wrapper">
              <Goals />
            </GoalsWrapper>
          </RightArea>
        </MenuStyle>
      </RecoilRoot>
    </div>
  );
}

export default Menu;
