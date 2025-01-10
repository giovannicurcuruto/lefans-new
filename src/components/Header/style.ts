import { Link } from "react-router-dom";
import styled from "styled-components";

interface MobileMenuProps {
  isOpen: boolean;
}

export const BackgroundFullDefault = styled.nav`
  background-color: var(--main-background-color);
`;

export const MenuContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; /* Esconde o menu completo em telas pequenas */
  }
`;

export const MenuItem = styled.li`
  font-size: 1.2rem;
`;

export const ImgLogoItem = styled.img`
  width: 104px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #555;
    transition: background-color 0.3s ease;
  }
`;

export const HamburguerMenu = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #fff;

  @media (max-width: 768px) {
    display: block; /* Exibe o menu hambúrguer em telas pequenas */
  }
`;

export const MobileMenuList = styled.ul<MobileMenuProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: var(--main-background-color);
  list-style: none;
  padding: 1rem;
  z-index: 100;

  @media (min-width: 768px) {
    display: none; /* Esconde o menu mobile em telas grandes */
  }

  transition: all 0.3s ease-in-out;
`;
