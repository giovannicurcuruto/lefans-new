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
                        <MenuLink href="#">Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#">Sobre Nós</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#">Produtos</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#">Programas</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#">Gestão de Planos</MenuLink>
                    </MenuItem>
                </MenuList>
            </MenuContainer>
        </>
    )
}