// interface HomePageProps {
import { BackgroundDetails, BackgroundElefante, ButtonBlue, GridMediumGrafico, ImgCris, ImgElefante, ImgGrafico, LastButton, LastGrid, MainGrid, MainText, MidGrid, MidText, Wrapped } from "./style";

import elefante from '../../assets/elefante_grande.png';
import foto1 from '../../assets/foto1.png';
import grafico1 from '../../assets/grafico_financeiro.png';
import bgelefa from '../../assets/sihueta.png';



export default function HomePage() {
    return (
        <>
            <BackgroundDetails>
                <BackgroundElefante backgroundImage={bgelefa}>
                    <Wrapped>
                        <MainGrid>
                            <ImgElefante src={elefante} />
                            <MainText>
                                <div>
                                    <h3>Pessoas, Saúde e Patrimônio</h3>
                                </div>
                                <div>
                                    <p>Proteção inteligente e inovadora em tudo que importa você!</p></div>
                                <div>
                                    <ButtonBlue>Saiba Mais</ButtonBlue>
                                </div>
                            </MainText>
                        </MainGrid>
                        <MidGrid>
                            <MidText>
                                <div>
                                    <h3>Cuidando das pessoas, protegendo empresas.</h3>
                                </div>
                                <p>A Lefan trabalha de forma integral identificando gerenciando e acompanahdno riscos relacionados à saúde corporativa, de pessoas e de patrimónios.</p>
                                <p>Atuamos de forma estratégica, gerando indicadores para uma melhor tomada de decisão, com foco em mapear as reais necessidades para sua empresa. </p>
                                <div>
                                    <ButtonBlue>Se você é profissional de RH, <br /> ENTRE EM CONTATO!</ButtonBlue>
                                </div>
                            </MidText>
                            <ImgCris src={foto1} />
                        </MidGrid>
                        <LastGrid>
                            <ImgGrafico src={grafico1} />
                            <GridMediumGrafico>
                                <div>
                                    <h3>Decisões baseadas em dados</h3>
                                </div>
                                <div>
                                    <p>
                                        Nosso objetivo é entregar soluções completas em Planos de Saúde e Seguros, com relatórios personalizados e dashboards intuitivos para insights entratégicos e redução de custos.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Os dados fornecidos ajudam na tomada de decisão e na prevenção de perdas de investimentos, tornando o plano de saúde da sua empresa mais sustentável
                                    </p>
                                </div>
                                <div>
                                    <LastButton> Mande uma mensagem agora!</LastButton>
                                </div>
                            </GridMediumGrafico>

                        </LastGrid>


                    </Wrapped>

                </BackgroundElefante>

            </BackgroundDetails>

        </>
    )
}


/**<Teste1>                
                <ImgBgElefante src={bgelefa} />
                <HomePageBody>

                    <Wrapper>


                        <GridFans >
                            <div>
                                <ImgFan src={elefante} alt="" />

                            </div>
                            <GridMedium>
                                <div>
                                    <div>
                                        <h3>Pessoas, Saúde e Patrimônio</h3>
                                    </div>
                                    <div>Proteção inteligente e inovadora em tudo que importa você!</div>
                                    <div>
                                        <button>Saiba Mais</button>
                                    </div>
                                </div>
                            </GridMedium>
                        </GridFans>
                        <GridFoto>
                            <GridMediumFotoText>
                                <div>
                                    <h3>Cuidando das pessoas, protegendo empresas.</h3>
                                </div>
                                <div>A Lefan trabalha de forma integral identificando gerenciando e acompanahdno riscos relacionados à saúde corporativa, de pessoas e de patrimónios.</div>
                                <div>Atuamos de forma estratégica, gerando indicadores para uma melhor tomada de decisão, com foco em mapear as reais necessidades para sua empresa. </div>
                                <div>
                                    <button>Se você é profissional de RH, ENTRE EM CONTATO!</button>
                                </div>
                            </GridMediumFotoText>
                            <div>
                                <ImgCris src={foto1} alt="" />
                            </div>
                        </GridFoto>
                        <GridGrafico>
                            <div>
                                <img src={grafico1} alt="" />
                            </div>
                            <GridMediumGrafico>
                                <div>
                                    <h3>Decisões baseadas em dados</h3>
                                </div>
                                <div>
                                    Nosso objetivo é entregar soluções completas em Planos de Saúde e Seguros, com relatórios personalizados e dashboards intuitivos para insights entratégicos e redução de custos.
                                </div>
                                <div>
                                    Os dados fornecidos ajudam na tomada de decisão e na prevenção de perdas de investimentos, tornando o plano de saúde da sua empresa mais sustentável


                                </div>
                                <div>
                                    <button> Mande uma mensagem agora!</button>
                                </div>
                            </GridMediumGrafico>


                        </GridGrafico>
                    </Wrapper>


                </HomePageBody>

            </Teste1> */