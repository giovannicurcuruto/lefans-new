// interface HeaderComponentProps {

import { MenuContainer, MenuItem, MenuLink, MenuList } from "./style";

// }
export default function HeaderComponent() {
    return (
        <>
            <div>
                LOGO VAI AQUI
            </div>
            <MenuContainer>
                <MenuList>
                    <MenuItem>
                        <MenuLink href="/">Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/sobre">Sobre Nós</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/produtos">Produtos</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/programas">Programas</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/gestao">Gestão de Planos</MenuLink>
                    </MenuItem>
                </MenuList>
            </MenuContainer>
        </>
    )
}