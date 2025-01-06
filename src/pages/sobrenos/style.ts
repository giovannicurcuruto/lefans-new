import styled from "styled-components";

interface BackgroundImgProps{
    backgroundImage: string;
}

export const BackgroundLightFullDefault = styled.div`
    background-color: var(--main-backgroundLightColor);
    height: 1800px;
`;

export const BackgroundColorFullDefault = styled.div`
    background-color: var(--main-background-color);
    padding-top: 130px;
    border-radius: 0 0 300px 0;
    height: 1800px;

`;

export const BackgroundFullDefault = styled.div<BackgroundImgProps>`
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: right;
    
    
    
`;

export const Imgbackground = styled.img`
    width: 944px;
`;


// export const Wrapper = styled.div`
//     margin: 0 auto;  
//     padding-left: 132px;
//     padding-right: 40px;
//     background-color: var(--main-background-color);

// `;

export const MainText = styled.div`    
    font-style: italic;
    max-width: 1400px;
    padding-left: 132px;
    padding-right: 40px;

    h2{
        color: var(--secondary-color);
        font-size: 54px;
        padding-bottom: 30px;
    }


    p {
        font-size: 25px;
        
    }
    padding-bottom: 90px;

`;

export const BackgroundImg = styled.div<BackgroundImgProps>`
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: right;
    width: 100%;
    
`;

export const CenterWrapper = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    display: grid;
    grid-template-columns: 1fr 2fr;
`;

export const ImgLeft = styled.img`

`;

export const TextCentralSection = styled.div`

`;
// export const CentralSection = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 2fr;

//     bottom: 1000px;


// `;

// export const ImgLeft = styled.img`
//     height: 617px;   

// `;

// export const TextCentralSection = styled.div`
//     padding-top: 100px;
//     padding-left: 30px; 

// `;

// export const Imgbackground = styled.img`
//     max-width: 1395.758px;
    
//     bottom: 90px;
    
// `;

// export const GridValues = styled.div`
//     display: grid;
//     grid-template-columns: 2fr 2fr 2fr;
//     place-items: center;
    
//     bottom: 600px;
// `;

// export const Item1Grid = styled.div`

// `;

// export const Item2Grid = styled.div`

// `;

// export const Item3Grid = styled.div`

// `;