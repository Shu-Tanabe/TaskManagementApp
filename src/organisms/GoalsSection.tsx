import React from 'react';
import styled from 'styled-components';
import Goals from './Goals';

const GoalsSectionStyle = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

function GoalsSection(): JSX.Element | null {
  return (
    <GoalsSectionStyle className="goals-section">
      <Goals />
    </GoalsSectionStyle>
  );
}

export default GoalsSection;
