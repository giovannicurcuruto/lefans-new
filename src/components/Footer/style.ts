import styled from "styled-components";

export const FooterBody = styled.div`
    position: relative;
    display: grid;
    margin: auto;
    
    height: 300px;
    width: 100%;
    background-color: var(--main-footer-color);
    place-items: center;
    color: black;
    z-index: 1;
    color: #1f426b;

`;

export const FooterAddress = styled.div`
    text-align: center;
    font-weight: 800;
    font-size: 25px;
    

`;

export const FooterSocialMedia = styled.div`
    max-width: var(--max-width);
    font-size: 23px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    
    img{
        width: 199px;

    }   
`;

export const SpanSocialMedia = styled.span`
    margin-left: 10px;
`;