import { BackgroundTest, GridItem1, Item1, Item12, Item2, MainText, Wrapped } from "./style";
import img_heart from '../../assets/mao_coracao.png';
import img_dente from '../../assets/dente.png';
import img_chuva from '../../assets/pessoas_chuva.png';
import img_chave from '../../assets/shield.png';

import img1 from '../../assets/silueta4.png';


export default function ProdutosPage() {
    return (
        <>
            <BackgroundTest backgroundImage={img1}>
                <Wrapped>

                    <MainText>
                        <h2>Soluções personalizadas para cada necessidade</h2>
                        <p>Como pilar estratégico, oferecemos produtos e serviços que garantem o melhor relação custo-beneficioo. Conheça: </p>

                    </MainText>

                    <Item1>
                        <h3>1. Plano de saúde</h3>
                        <GridItem1>
                            <img src={img_heart} />
                            <div>
                                <ul>
                                    <li>Personalização nas ofertas de cobertura médica;</li>
                                    <li>Soluções estratégicas para prevenção;</li>
                                    <li>Garantia de Saúde para você, sua familia e colaboradores da sua empresa.</li>
                                </ul>
                            </div>
                        </GridItem1>
                    </Item1>

                    <Item12>
                        <h3>2. Plano Odontológico</h3>
                        <GridItem1>
                            <img src={img_dente} />
                            <div>
                                <ul>
                                    <li>Cuidados odontológicos e soluções personalizadas;</li>
                                    <li>Garantia de Saúde para você, sua familia e colaboradores da sua empresa.</li>
                                </ul>
                            </div>
                        </GridItem1>
                    </Item12>

                    <Item12>
                        <h3>3. Seguro de Pessoas e Previdência</h3>
                        <GridItem1>
                            <img src={img_chuva} />
                            <div>
                                <ul>
                                    <li>Proteção financeira pessoal;</li>
                                    <li>Investimento para garantir uma renveda no futuro;</li>
                                    <li>Proteção além da aposentadoria.</li>
                                </ul>
                            </div>
                        </GridItem1>
                    </Item12>

                    <Item12>
                        <h3>4. Seguro Patrimonial</h3>
                        <GridItem1>
                            <img src={img_chave} />
                            <div>
                                <ul>
                                    <li>Personalização nas ofertas de cobertura médica;</li>
                                    <li>Soluções estratégicas para prevenção;</li>
                                    <li>Garantia de Saúde para você, sua familia e colaboradores da sua empresa.</li>
                                </ul>
                            </div>
                        </GridItem1>
                    </Item12>

                    <Item2>
                        <h3>Diferenciais Competitivos</h3>
                        <ul>
                            <li>Vendas consultivas;</li>
                            <li>Gerenciamento de riscos;</li>
                            <li>Gestão de sinistro;</li>
                            <li>Análise de dados com Business Intelligence.</li>
                        </ul>

                        <button>Quero conversar com um especialista.</button>

                    </Item2>

                </Wrapped>
            </BackgroundTest >


        </>
    )
}