// interface HeaderComponentProps {

import { BackgroundFullDefault, ImgLogoItem, MenuContainer, MenuItem,  MenuList, StyledLink } from "./style";

import img_logo from '../../assets/logo.png';
import { useLocation } from "react-router-dom";
import { ROUTESPATHS } from "../../Router";

// }
export default function HeaderComponent() {
    const location = useLocation();
    return (
        <>
            <BackgroundFullDefault>
                <MenuContainer>
                    <MenuList>
                        <MenuItem>
                            <ImgLogoItem src={img_logo} />
                        </MenuItem>
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
                    </MenuList>
                </MenuContainer>
            </BackgroundFullDefault>
        </>
    )
}