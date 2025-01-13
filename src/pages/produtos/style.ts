import styled from "styled-components";

interface BackgroundTestProps {
    backgroundImage: string;
}

interface BackgroundLinhaProps {
    backgroundImage: string;
}

export const BackgroundFullDefault = styled.div`
    background-color: var(--main-background-color);
    height: 2630px;
    border-radius: 0 0 300px 0;

    @media (max-width: 768px) {
        height: 3500px;
        border-radius: 0 0 100px 0;
    }
    
`;

export const BackgroundImageDefault = styled.div<BackgroundTestProps>`    
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover; 
    height: 1786px;

`;

export const Wrapped = styled.div`
    padding-left: 198px; 
    padding-right: 80px;

    @media (max-width: 768px) {        
        padding-left: 35px; 
        padding-right: 20px;
    }
`;

    
export const MainText = styled.div`
    padding-top: 135px;
    max-width: 797px;
    font-style: italic;

    h2 {
        font-size: 54px;
        color: var(--secondary-color);
        padding-bottom: 25px;
    }
    p {
        font-size: 30px;
        padding-bottom: 55px;
    }

    @media (max-width: 768px) {        
        padding-top: 50px;
        max-width: 100%; 
        width: 100%;

        h2 {
            font-size: 28px;
            
        }

        p {
            font-size: 17px;
            padding-bottom: 20px;
        }
    }

`;

export const Item1 = styled.div`
    padding-top: 100px;
    padding-bottom: 85px;  
    h3{
        font-size: 53px;
        color: var(--secondary-color);
    }

    @media (max-width: 768px) {
        padding-top: 50px;

        h3{
            font-size: 30px;
        }
    }

`;

export const GridItem1 = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 2fr;
    font-size:28px;
    padding-top: 35px;

    ul{
        max-width: 890px;
        padding-left: 35px;        
    }

    img {
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 2fr;        
        font-size: 20px;

        ul{
            padding-top:50px;
        }        
    }

`;

export const Item12 = styled.div`
    padding-bottom: 85px;

    h3{
        font-size: 53px;
        color: var(--secondary-color);
    }

    

    @media (max-width: 768px) {
        padding-top: 50px;

        h3{
            font-size:  27px;
        }
    }

`;

export const Item21 = styled.div`

`;

export const Item22 = styled.div<BackgroundLinhaProps>`
    padding-top: 160px;
    padding-bottom: 140px;        
    padding-left: 700px;     
    
    h3{
        font-size: 65px;        
        color: var(--secondary-color);
        padding-bottom: 30px;
    }

    ul {
        font-size: 35px;
        padding-left: 30px;
        padding-bottom: 30px;

    }

    button{
        font-size: 41px;
        border-radius: 50px;
        font-style: italic;
        color: var(--main-background-color);
    }

    @media (max-width: 768px) {
        padding-left: 0; 
        padding-top: 50px;  
          

        h3{
            text-align: center;
            font-size: 35px;
        }

        ul{
            font-size: 20px;
        }
        button{
            font-size: 25px;
        }
    }
    
`;


export const ImgWave = styled.img`
    position: absolute;
    top: 1900px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Separator = styled.div`
    display: none;

    @media (max-width: 768px) {     
        display: block;
        width: 100%;
        height: 5px;
        background-color: var(--secondary-color);
        margin: 0 auto;
        
        
    }
`;
