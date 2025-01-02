import { GridItem1, Item, Item2, MainText } from "./style";

export default function ProdutosPage() {
    return (
        <>
            <MainText>
                <h2>Soluções personalizadas para cada necessidade</h2>
                <p>Como pilar estratégico, oferecemos produtos e serviços que garantem o melhor relação custo-beneficioo. Conheça: </p>

            </MainText>

            <Item>
                <h3>1. Plano de saúde</h3>
                <GridItem1>
                    <img src="" />
                    <div>
                        <ul>
                            <li>Personalização nas ofertas de cobertura médica;</li>
                            <li>Soluções estratégicas para prevenção;</li>
                            <li>Garantia de Saúde para você, sua familia e colaboradores da sua empresa.</li>
                        </ul>
                    </div>
                </GridItem1>
            </Item>

            <Item>
                <h3>2. Plano Odontológico</h3>
                <GridItem1>
                    <img src="" />
                    <div>
                        <ul>
                            <li>Cuidados odontológicos e soluções personalizadas;</li>
                            <li>Garantia de Saúde para você, sua familia e colaboradores da sua empresa.</li>
                        </ul>
                    </div>
                </GridItem1>
            </Item>

            <Item>
                <h3>3. Seguro de Pessoas e Previdência</h3>
                <GridItem1>
                    <img src="" />
                    <div>
                        <ul>
                            <li>Proteção financeira pessoal;</li>
                            <li>Investimento para garantir uma renveda no futuro;</li>
                            <li>Proteção além da aposentadoria.</li>
                        </ul>
                    </div>
                </GridItem1>
            </Item>

            <Item>
                <h3>4. Seguro Patrimonial</h3>
                <GridItem1>
                    <img src="" />
                    <div>
                        <ul>
                            <li>Personalização nas ofertas de cobertura médica;</li>
                            <li>Soluções estratégicas para prevenção;</li>
                            <li>Garantia de Saúde para você, sua familia e colaboradores da sua empresa.</li>
                        </ul>
                    </div>
                </GridItem1>
            </Item>

            <Item2>
                <h3>Diferenciais Competitivos</h3>
                <ul>
                    <li>Vendas consultivas;</li>
                    <li>Gerenciamento de riscos;</li>
                    <li>Gestão de sinistro;</li>
                    <li>Análise de dados com Business Intelligence.</li>
                </ul>

            </Item2>


        </>
    )
}