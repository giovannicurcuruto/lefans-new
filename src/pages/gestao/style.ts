import styled from "styled-components";

export const MainText = styled.div`

`;

export const TimelineContainer = styled.div`
  background-color: #0b3048; /* Fundo azul escuro */
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TimelineCurve = styled.div`
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, #0b3048 50%, #e9e9e0 50%);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Step = styled.div`
  background-color: #e9e9e0;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  margin: 20px 0;
`;

export const StepIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

export const StepText = styled.div`
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #0b3048;
  text-align: center;
`;

export const StepNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #e9e9e0;
  background-color: #0b3048;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;
  left: calc(50% - 25px);
  z-index: 3;
`;