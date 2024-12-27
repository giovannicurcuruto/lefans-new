import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import GestaoPage from "./pages/gestao"
import ProgramasPage from "./pages/programas"
import ProdutosPage from "./pages/produtos"
import SobrePage from "./pages/sobrenos"
import DefaultPage from "./components/DefaultPage"

export const ROUTESPATHS = {
    ROOT: '/',
    SOBRE: '/sobre',
    PRODUTOS: '/produtos',
    PROGRAMAS: '/programas',
    GESTAO: '/gestao'

}


export default function RoutesComponent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTESPATHS.ROOT} element={<DefaultPage/>}>
                        <Route path={ROUTESPATHS.ROOT} element={<HomePage />} />
                        <Route path={ROUTESPATHS.GESTAO} element={<GestaoPage />} />
                        <Route path={ROUTESPATHS.PROGRAMAS} element={<ProgramasPage />} />
                        <Route path={ROUTESPATHS.PRODUTOS} element={<ProdutosPage />} />
                        <Route path={ROUTESPATHS.SOBRE} element={<SobrePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}