import styled from "styled-components";

export const Teste1 = styled.div`
    position: relative;
    width:100%;
    height: 2000px;
    border-radius: 0 0 250px 250px;
    background-color: var(--main-background-color);
    z-index: 0;
//    margin-bottom: -250px;
`;

export const HomePageBody = styled.div`    
    position: relative;
    
    margin: 0 auto;
    max-width:1395.758px;
    width: 1200px;
    
    
`;

export const Wrapper = styled.div`
    display: grid;
    position: relative;
    place-items: center;
    margin: 0 auto;
    max-width:1395.758px;
    width: 1200px;
    background-color: var(--main-background-color);
    //z-index: 2;

`;

export const GridFans = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 2fr;
  z-index: 3;  
`;

export const GridMedium = styled.div`    
    display: grid;
    place-items: center;
    margin: 0 auto;
    div {
        margin-bottom: 1rem;
    }  

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const ImgFan = styled.img`
    max-width: 618px;

`;

export const GridFoto = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 2fr;
    z-index: 3;  

   
`;


export const GridMediumFotoText = styled.div`
    display: grid;
    place-items: center;
    margin: 0 auto;

`;

export const ImgCris = styled.img`
    max-width: 430px;

`;

export const GridGrafico = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;

    img{
        max-width: 233px;
    }

`;

export const GridMediumGrafico = styled.div`
    grid-template-rows: 2fr 2fr 2fr 1fr;

`;

export const ImgBgElefante = styled.img`
    
    position: absolute; /* Para posicionamento relativo ao pai */
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1650px;
    z-index: 1; /* Certifica-se de que está atrás */
    //max-width: 1400; /* Remove o limite de largura */   
    

`;

