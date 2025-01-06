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

`;

export const FooterAddress = styled.div`
    text-align: center;

`;

export const FooterSocialMedia = styled.div`
    max-width: var(--max-width);
    font-size: 16px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    
    img{
        width: 199px;

    }

   
`;

export const SpanSocialMedia = styled.span`
    margin-left: 10px;
`;