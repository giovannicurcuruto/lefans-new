// interface HeaderComponentProps {

import { BackgroundFullDefault, HamburguerMenu, ImgLogoItem, MenuContainer, MenuItem, MenuList, MobileMenuList, StyledLink } from "./style";

import img_logo from '../../assets/logo.png';
import { useLocation } from "react-router-dom";
import { ROUTESPATHS } from "../../Router";
import { useState } from "react";

// }
export default function HeaderComponent() {
    const location = useLocation();

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <BackgroundFullDefault>
                <MenuContainer>
                    <ImgLogoItem src={img_logo} alt="Logo" />
                    <HamburguerMenu onClick={toggleMobileMenu}>☰</HamburguerMenu>
                    <MenuList>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.ROOT}
                                style={
                                    location.pathname === "/"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                            >
                                Home
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.SOBRE}
                                style={
                                    location.pathname === "/sobre"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                            >
                                Sobre Nós
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.PRODUTOS}
                                style={
                                    location.pathname === "/produtos"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                            >
                                Produtos
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.PROGRAMAS}
                                style={
                                    location.pathname === "/programas"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                            >
                                Programas
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.GESTAO}
                                style={
                                    location.pathname === "/gestao"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                            >
                                Gestão de Planos
                            </StyledLink>
                        </MenuItem>
                    </MenuList>
                    <MobileMenuList isOpen={isMobileMenuOpen}>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.ROOT}
                                style={
                                    location.pathname === "/"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                                onClick={closeMobileMenu}
                            >
                                Home
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.SOBRE}
                                style={
                                    location.pathname === "/sobre"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                                onClick={closeMobileMenu}
                            >
                                Sobre Nós
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.PRODUTOS}
                                style={
                                    location.pathname === "/produtos"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                                onClick={closeMobileMenu}
                            >
                                Produtos
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.PROGRAMAS}
                                style={
                                    location.pathname === "/programas"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                                onClick={closeMobileMenu}
                            >
                                Programas
                            </StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink
                                to={ROUTESPATHS.GESTAO}
                                style={
                                    location.pathname === "/gestao"
                                        ? { color: "#BE945E", fontWeight: "bold" }
                                        : {}
                                }
                                onClick={closeMobileMenu}
                            >
                                Gestão de Planos
                            </StyledLink>
                        </MenuItem>
                    </MobileMenuList>
                </MenuContainer>
            </BackgroundFullDefault>
        </>
    )
}

/** <BackgroundFullDefault>
                <MenuContainer>
                    <MenuList>
                        <MenuItem>
                            <ImgLogoItem src={img_logo} />
                        </MenuItem>
                        <HamburguerMenu onClick={toggleMobileMenu}>
                            ☰
                        </HamburguerMenu>
                        <MobileMenuList isOpen={isMobileMenuOpen}>



                            <MenuItem>
                                <StyledLink
                                    to={ROUTESPATHS.ROOT}
                                    style={location.pathname === '/' ? {
                                        color: '#BE945E',
                                        fontWeight: 'bold'
                                    } : {}}>
                                    Home
                                </StyledLink>
                            </MenuItem>
                            <MenuItem>
                                <StyledLink
                                    to={ROUTESPATHS.SOBRE}
                                    style={location.pathname === '/sobre' ? {
                                        color: '#BE945E',
                                        fontWeight: 'bold'
                                    } : {}}>
                                    Sobre Nós
                                </StyledLink>
                            </MenuItem>
                            <MenuItem>
                                <StyledLink
                                    to={ROUTESPATHS.PRODUTOS}
                                    style={location.pathname === '/produtos' ? {
                                        color: '#BE945E',
                                        fontWeight: 'bold'
                                    } : {}}>
                                    Produtos
                                </StyledLink>
                            </MenuItem>
                            <MenuItem>
                                <StyledLink
                                    to={ROUTESPATHS.PROGRAMAS}
                                    style={location.pathname === '/programas' ? {
                                        color: '#BE945E',
                                        fontWeight: 'bold'
                                    } : {}}>
                                    Programas
                                </StyledLink>

                            </MenuItem>
                            <MenuItem>
                                <StyledLink
                                    to={ROUTESPATHS.GESTAO}
                                    style={location.pathname === '/gestao' ? {
                                        color: '#BE945E',
                                        fontWeight: 'bold'
                                    } : {}}>
                                    Gestão de Planos
                                </StyledLink>
                            </MenuItem>
                        </MobileMenuList>
                    </MenuList>
                </MenuContainer>
            </BackgroundFullDefault> */