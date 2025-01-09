import styled from "styled-components";


export const CardContainer = styled.div<{ expanded: boolean}>`
  background-color: #e9e9e0;
  border-radius: 100px;
  width: 500px;
  //height: ${({ expanded }) => (expanded ? "1000px" : "630px")};
  min-height: 630px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:${({ expanded }) => (expanded ? "130px" : "0px")};
  padding-top:${({ expanded }) => (expanded ? "130px" : "0px")};
  justify-content: ${({ expanded }) => (expanded ? "flex-start" : "center")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: height 0.3s ease;
`;

export const WrappedCard = styled.div`
  display: grid;
  place-items: center;
`;

export const Icon = styled.img`
  width: 288px;
  height: 270px;
  margin-bottom: 20px;
  
`;

export const Text = styled.div`
  
  font-size: 14px;
  color: #333;
  text-align: center;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  

  strong{
    font-size: 34px;
  }
  p{
    font-size: 19px;
  }
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
  margin-top: -70px;
  
    
  font-size: 18px;
  border: none;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: var(--main-background-color);
  font-size: 150px;
  cursor: pointer;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;