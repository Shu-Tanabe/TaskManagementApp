import React from 'react';
import styled from 'styled-components';
import MoreVertIcon from '../icons/more_vert_black_24dp.svg';
import type { GoalType } from '../models/GoalModel';

const GoalStyle = styled.section<{ index: number }>`
  width: 60vw;
  height: 16vh;
  position: absolute;
  display: block;
  background: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #424242;
  transform: translateY(${({ index }) => index * 19}vh);
  .goal-title {
    padding: 20px 20px 8px 20px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    p {
      margin: 0;
    }
    button {
      border: none;
      border-radius: 4px;
      margin: 0 0 0 auto;
      cursor: pointer;
      background: inherit;
      :hover {
        background: #eeeeee;
      }
    }
  }
  .goal-description {
    padding: 0 80px 0 20px;
    font-size: 14px;
    height: 6.5vh;
  }
  .goal-status-wrapper {
    width: 4vw;
    height: 2.4vh;
    padding-right: 20px;
    margin: 0 0 0 auto;
  }
  .goal-status {
    width: inherit;
    height: inherit;
    background: #bdbdbd;
    border-radius: 17px;
    text-align: center;
    display: grid;
    place-items: center;
  }
`;

type GoalProsType = {
  index: number;
  goal: GoalType;
};

function Goal({ index, goal }: GoalProsType): JSX.Element {
  return (
    <GoalStyle index={index}>
      <div className="goal-title">
        <p>{goal.title}</p>
        <button>
          <img src={MoreVertIcon} alt="more-vert" />
        </button>
      </div>
      <div className="goal-description">{goal.description}</div>
      <div className="goal-status-wrapper">
        <div className="goal-status">{goal.status}</div>
      </div>
    </GoalStyle>
  );
}

export default Goal;
