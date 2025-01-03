import styled from "styled-components";

interface BackgroundTestProps {
    backgroundImage: string;
}



export const BackgroundFullDefault = styled.div`
    background-color: var(--main-background-color);
    padding-top:500px;
`;

export const BackgroundImageDefault = styled.div<BackgroundTestProps>`
    
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover; 
    height: 1786px;

`;






export const BackgroundTest = styled.div<BackgroundTestProps>`
    
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;    
    
`;

export const Wrapped = styled.div`
    padding-left: 198px;
    

`;


// export const Wrapped = styled.div`
//     position: relative;
//     z-index: 1;
//     padding-left: 198px;
//     background-color: var(--main-background-color);
//     //background-color: red;
//     border-radius: 0 0 250px 0;

 
    
// `;

export const MainText = styled.div`
    position: relative;
    z-index: 3;
    padding-top: 175px;
    max-width: 797px;

    h2 {
        font-size: 54.66px;
        color: var(--secondary-color);
    }
    p {
        font-size: 30px;
    }

`;

export const Item1 = styled.div`
    position: relative;
    z-index: 3;
    padding-top: 155px;

    h3{
        font-size: 53px;
        color: var(--secondary-color);
    }

    padding-bottom: 85px;  

`;

export const Item12 = styled.div`
    position: relative;
    z-index: 3;
 
    h3{
        font-size: 53px;
        color: var(--secondary-color);
    }

    padding-bottom: 85px;

`;


export const GridItem1 = styled.div`
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 0.4fr 2fr;
    padding-top: 65px;

    ul {
        list-style-type: disc;
        max-width: 890px;
        font-size: 28.21px;
    }

    img{
        margin: 0 auto;
    }

`;

export const Item2 = styled.div`
    position: relative;
    z-index: 3;
    h3{
        font-size: 65px;
        font-style: italic;
        color: var(--secondary-color);
    }

    ul{
        font-size: 35px;
    }

    button{
        font-size: 41px;
        border-radius: 25px;
        font-style: italic;
        color: var(--main-background-color);
    }

    padding-bottom: 140px;
`;