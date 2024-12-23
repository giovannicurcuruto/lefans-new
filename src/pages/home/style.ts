import styled from "styled-components";

export const Teste1 = styled.div`
    position: relative;
    width:100%;
    height: 2000px;
    border-radius: 0 0 250px 250px;
    background-color: var(--main-background-color);
    z-index: 10;
    margin-bottom: -250px;
`;

export const HomePageBody = styled.div`
    display: grid;
    place-items: center;
    margin: 0 auto;
    max-width:1395.758px;
    width: 1200px;
    background-color: red;
    
`;

export const GridFans = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;  

`;

export const GridMedium = styled.div`
    display: grid;
    grid-template-rows: 2fr 2fr 1fr;



`;

export const GridFoto = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;

`;

export const GridMediumFotoText = styled.div`
    display: grid;
    grid-template-rows: 2fr 2fr 2fr 1fr;

`;

export const GridGrafico = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;


`;

export const GridMediumGrafico = styled.div`
    grid-template-rows: 2fr 2fr 2fr 1fr;

`;