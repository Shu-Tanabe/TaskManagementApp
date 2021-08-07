import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Goal from '../molecules/Goal';
import { goalState } from '../states/rootStates/goals';

const GoalsStyle = styled.div`
  width: auto;
  height: 150vh;
  justify-content: center;
  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 0;
  padding-bottom: 50px;
  display: flex;
`;

function Goals(): JSX.Element | null {
  const goals = useRecoilValue(goalState);

  if (!goals) {
    return (
      <div>
        <GoalsStyle className="goals">
          <p>表示するタグはありません</p>
        </GoalsStyle>
      </div>
    );
  }
  return (
    <GoalsStyle className="goals">
      {goals.map((goal, index) => (
        <Goal key={goal.id} index={index} goal={goal} />
      ))}
    </GoalsStyle>
  );
}

export default Goals;
