import styled from "styled-components";

export const BackgroundFullDefault = styled.div`
    background-color: var(--main-background-color);
    padding-top: 130px;
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1395.758px;
    width: 1200px;
    background-color: var(--main-background-color);

`;

export const MainText = styled.div`    
    font-style: italic;
    max-width: 1000px;
    position:relative;
    z-index: 2;

    p {
        font-size: 19px;
        
    }

`;

export const CentralSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    position: relative;
    z-index: 2;
    bottom: 1000px;


`;

export const ImgLeft = styled.img`
    height: 617px;   

`;

export const TextCentralSection = styled.div`
    padding-top: 100px;
    padding-left: 30px; 

`;

export const Imgbackground = styled.img`
    max-width: 1395.758px;
    position: relative;
    bottom: 90px;
    z-index: 0;
`;

export const GridValues = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    place-items: center;
    position:relative;
    bottom: 600px;
`;

export const Item1Grid = styled.div`

`;

export const Item2Grid = styled.div`

`;

export const Item3Grid = styled.div`

`;