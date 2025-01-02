// interface HeaderComponentProps {

import { BackgroundFullDefault, ImgLogoItem, MenuContainer, MenuItem, MenuLink, MenuList } from "./style";

import img_logo from '../../assets/logo.png';
import { useLocation } from "react-router-dom";

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
                            <MenuLink
                                href="/"
                                style={location.pathname === '/' ? {
                                    color: '#BE945E',
                                    fontWeight: 'bold'
                                } : {}}>
                                Home
                            </MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink
                                href="/sobre" style={location.pathname === '/sobre' ? {
                                    color: '#BE945E',
                                    fontWeight: 'bold'
                                } : {}}>
                                Sobre Nós
                            </MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink
                                href="/produtos"
                                style={location.pathname === '/produtos' ? {
                                    color: '#BE945E',
                                    fontWeight: 'bold'
                                } : {}}>
                                Produtos
                            </MenuLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuLink
                                href="/programas"
                                style={location.pathname === '/programas' ? {
                                    color: '#BE945E',
                                    fontWeight: 'bold'
                                } : {}}>
                                Programas
                            </MenuLink>

                        </MenuItem>
                        <MenuItem>
                            <MenuLink
                                href="/gestao"
                                style={location.pathname === '/gestao' ? {
                                    color: '#BE945E',
                                    fontWeight: 'bold'
                                } : {}}>
                                Gestão de Planos
                            </MenuLink>
                        </MenuItem>
                    </MenuList>
                </MenuContainer>
            </BackgroundFullDefault>
        </>
    )
}