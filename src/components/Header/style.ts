import styled from "styled-components";

export const MenuContainer = styled.nav`
    background-color: #333;
    padding: 1rem;

`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    
`;

export const MenuItem = styled.li`
    font-size: 1.2rem;

`;

export const MenuLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;

    &:hover{
        background-color:#555;
        transition:backgrond-color 0.3s ease;
    }

`;