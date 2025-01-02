import styled from "styled-components";

export const CardContainer = styled.div<{ expanded: boolean}>`
  background-color: #e9e9e0;
  border-radius: 20px;
  padding: 20px;
  width: 350px;
  height: ${({ expanded }) => (expanded ? "500px" : "200px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ expanded }) => (expanded ? "flex-start" : "center")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: height 0.3s ease;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  
  font-size: 14px;
  color: #333;
  text-align: center;
  margin-top: 10px;
`;

export const List = styled.ul`
  margin-top: 15px;
  text-align: left;
  padding-left: 20px;
  list-style-type: disc;

  li {
    font-size: 13px;
    margin-bottom: 5px;
  }
`;

export const ExpandButton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  background-color: #333;
  color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;