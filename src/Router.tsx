import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import GestaoPage from "./pages/gestao"
import ProgramasPage from "./pages/programas"
import ProdutosPage from "./pages/produtos"
import SobrePage from "./pages/sobrenos"

export const ROUTESPATHS = {
    ROOT: '/',
    SOBRE: '/sobre',
    PRODUTOS: '/produtos',
    PROGRAMAS: '/programas',
    GESTAO: '/gestao'

}


export default function ComponentName(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTESPATHS.ROOT} element={<HomePage/>} />
                    <Route path={ROUTESPATHS.ROOT} element={<GestaoPage/>} />
                    <Route path={ROUTESPATHS.ROOT} element={<ProgramasPage/>} />
                    <Route path={ROUTESPATHS.ROOT} element={<ProdutosPage/>} />
                    <Route path={ROUTESPATHS.ROOT} element={<SobrePage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}