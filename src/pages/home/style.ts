import styled from "styled-components";

interface BackgroundImageFont {
    backgroundImage: string
}


export const BackgroundDetails = styled.div`
    background-color: var(--main-background-color);
    border-radius: 0 0 250px 250px;
    height: 2800px;
    width:100%;

    @media (max-width: 768px) {
        border-radius: 0 0 100px 100px;
        height: 2600px;
    }
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

    @media (max-width: 768px) {
        background-image: none;
    }

    @media (max-width: 480px) {
        background-image: none;
    }
`;

export const Wrapped = styled.div`
    padding-left: 80px;
    padding-right: 80px;

    @media (max-width: 768px) {
        padding-left: 40px;
        max-width: 768px;       
        
    }

    @media (max-width: 480px) {
        padding-left: 40px;
        max-width: 480px;           
    }
`;

export const MainGrid = styled.div`
    position: relative;
    top:100px;
    display: grid;
    grid-template-columns: 2fr 2fr;

    @media (max-width: 768px) {
        top: 10px;
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr;         
    }

    @media (max-width: 480px) {       
    }
    
`;

export const ImgElefante = styled.img`
    width: 779px;
    height: 657px;

    @media (max-width: 768px) {
        width: 300px;
        height: auto;        
    }

    @media (max-width: 480px) {
    }
    
`;


export const MainText = styled.div`
    display: grid;
    padding-top: 243px;   
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

    @media (max-width: 768px) {
        display: grid;
        padding-top: 5px;   
        height: 250px;
        h3{
            font-size: 30px;
            font-style: italic;
            margin-bottom: 15px;
        }

        p {            
            font-size: 25px;
            font-style: italic;
            margin-bottom: 20px;
        }        
    }

    @media (max-width: 480px) {
        
    }
`;

export const ButtonBlue = styled.button`
    background-color: var(--main-background-color);
    color: var(--secondary-color);
    font-size: 40px;
    font-style: italic;
    border-radius: 50px;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

export const MidGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;

    @media (max-width: 768px) {
        padding-top: 150px;
        grid-template-rows: 0.3fr 1fr;
        grid-template-columns: none;

        & > img { 
            order: -1; // Move o ImgCris para o topo
        }        
    }

    @media (max-width: 480px) {
        
    }
`;

export const MidText = styled.div`
    padding-top: 150px;
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

    @media (max-width: 768px) {       
        padding-top: 50px;
        h3 {
            font-size: 25px;
            text-align:center;
            
        }

        p{
            font-size: 17px;
            text-align:center;
         
        }

        button{
            margin-left: 0px;
            font-size: 18px;
            margin-bottom: 80px;
        }
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const ImgCris = styled.img`
    //max-width: 430px;
    padding-left:200px;

    @media (max-width: 768px) {
        padding-left: 0;
        width:100%;             
    }

    @media (max-width: 480px) {
    }
`;

export const LastGrid = styled.div`
    padding-top: 310px;
    display: grid;
    grid-template-columns: 0.8fr 2fr;

    @media (max-width: 768px) {
        grid-template-rows: 0.5fr 0.5fr;
        grid-template-columns: none;
        padding-top: 10px;            
    }

    @media (max-width: 480px) {        
        
    }    
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
    
    @media (max-width: 768px) {
        grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
        text-align: center;
        font-size: 15px;
        max-width: 100%;
        padding-left: 0;

        h3{
            padding-top: 50px;
            font-size: 25px;
        }
        p{
            padding-top: 17px;
            padding-bottom: 17px;
        }                
    }

    @media (max-width: 480px) {
        
    }
`;

export const LastButton = styled.button`
    font-size: 32px;
    font-style: italic;
    border-radius: 50px;
    color: var(--main-background-color);

    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

export const ImgGrafico = styled.img`
    width: 450px;
    @media (max-width: 768px) {        
        width:100%;     
    }

    @media (max-width: 480px) {        
        width:100%;
    }
`;


