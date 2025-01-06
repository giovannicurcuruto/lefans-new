import styled from "styled-components";

interface BackgroundImageFont{
    backgroundImage: string
}


export const BackgroundDetails = styled.div`
    background-color: var(--main-background-color);
    border-radius: 0 0 250px 250px;
    height: 2800px;
    width:100%;
    
`;

//url(${(props) => props.backgroundImage});
//preciso dar um padding/margin/position para 426
export const BackgroundElefante = styled.div<BackgroundImageFont>`
    background-image: url(${(props) => props.backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    top: 50px;
    height: 1632px;
    
`;

export const Wrapped = styled.div`
    padding-left: 80px;
    padding-right: 80px;

`;

export const MainGrid = styled.div`
    position: relative;
    top:100px;
    display: grid;
    grid-template-columns: 2fr 2fr;
`;

export const ImgElefante = styled.img`
    width: 779px;
    height: 657px;
    
`;


export const MainText = styled.div`
    display: grid;
    padding-top: 243px;
    //place-items: center;
    //margin: 0 auto;
    height: 300px;
    h3{
        font-size: 55px;
        font-style: italic;
        margin-bottom: 15px;
    }

    p {
        max-width: 670px;
        font-size: 41px;
        font-style: italic;
        margin-bottom: 20px;
    }

   

`;

export const ButtonBlue = styled.button`
    background-color: var(--main-background-color);
    color: var(--secondary-color);
    font-size: 40px;
    font-style: italic;
    border-radius: 50px;
`;

export const MidGrid = styled.div`

    display: grid;
    grid-template-columns: 2fr 2fr;

`;

export const MidText = styled.div`
    padding-top: 170px;
    font-style: italic;

    h3 {
       font-size: 54px;
       margin-bottom: 45px;
    }

    p{
        font-size: 32px;
        margin-bottom: 25px;
    }

    button{
        margin-left: 180px;
    }
    
`;

export const ImgCris = styled.img`
    //max-width: 430px;
    padding-left:200px

`;

export const LastGrid = styled.div`
    padding-top: 310px;
    display: grid;
    grid-template-columns: 0.8fr 2fr;
    

    
`;

export const GridMediumGrafico = styled.div`
    display: grid;
    grid-template-rows: 2fr 2fr 2fr 1fr;
    max-width: 1100px;
    padding-left: 120px;
    h3{
        font-size: 54px;
    }
    
    font-size: 32px;
    font-style: italic;    

`;

export const LastButton = styled.button`
    font-size: 32px;
    font-style: italic;
    border-radius: 50px;
    color: var(--main-background-color);
`;

export const ImgGrafico = styled.img`
    width: 450px;
`;


