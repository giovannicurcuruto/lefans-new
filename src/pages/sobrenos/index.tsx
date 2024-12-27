import CountItensComponent from "../../components/CountItens";
import { CentralSection, GridValues, ImgLeft, Item1Grid, Item2Grid, Item3Grid, MainText, TextCentralSection } from "./style";

export default function SobrePage() {
    return (
        <>
            <MainText>
                <h2>A Natureza nos inspira!</h2>

                <p>Somos a Lefan, uma corretora de seguros inspirada no elefante, símbolo de força, proteção, sabedoria e afeto. Nossa essência é proteger e orientar nossos clientes com soluções inteligentes, garantindo a segurança dos seus bens e de suas vidas.</p>
                <p>Especializada em consultoria de seguros e planos de saúde, atuamos nos segmentos de Pessoas, Saúde e Patrimônio, oferecendo proteção pessoal e familiar, investimentos patrimoniais e gestão de riscos. </p>
                <p>Nossa abordagem é centrada nas necessidades reais de cada cliente proporcionando um atendimento personlaizado e consultivo. </p>
            </MainText>

            <CentralSection>
                <ImgLeft></ImgLeft>
                <TextCentralSection>
                    <h2>Posicionamento Empresarial</h2>
                    <p>Nosso posicionamento é pautado pelo compromisso com o bem-estar e a segurança de nossos clientes. Desde nossa origem como Corretora de Seguros Mais Vida, sob a liderança de Christine Barbary, focamos em oferecer planos de saúde empresariais, adotando uma abordagem preventiva e educativa para promover a saúde e qualidade de vida.</p>
                    <p>Com o tempo, expandimos essa visão, incorporando o Ramo de Seguros Patrimoniais, com o objetivo de proteger os bens de nossos clientes e garantir sua tranquilidade. Atualmente, como Lefan Consultoria em Seguros, ampliamos nossa atuação para fornecer soluções completas e personalizadas nos ramos de Pessoas, Saúde e Patrimônio.</p>
                    <p>Nosso objetivo vai além da oferta de seguros: buscamos atuar como consultores de confiança, oferecendo soluções que se ajustam às necessidades específicas de cada cliente, seja no âmbito pessoal ou empresarial, sempre promovendo segurança e bem-estar.</p>

                </TextCentralSection>
            </CentralSection>

            <GridValues>
                <Item1Grid>
                    <img src="" alt="" />
                    <div>
                        <h3>Missão:</h3>
                        <p>Proporcionar segurança, tranquilidade e a melhor relação custo-benefício para nossos clientes, por meio da intermediação da venda de seguros e serviços personalizados com as melhores seguradoras/operadoras do mercado.</p>
                    </div>
                </Item1Grid>
                <Item2Grid>
                    <img src="" alt="" />
                    <div>
                        <h3>Visão:</h3>
                        <p>Consolidar-se como uma parceira estratégica, criando alianças para proteger pessoas, empresas e seus recursos capitais, oferecendo valor agregado na gestão de riscos que promova sustentabilidade e bem-estar para toda a sociedade.</p>
                    </div>
                </Item2Grid>
                <Item3Grid>
                    <img src="" alt="" />
                    <ul>
                        <li>Ética</li>
                        <li>Comprometimento</li>
                        <li>Gentileza</li>
                        <li>Melhoria contínua</li>
                        <li>Produtividade</li>
                        <li>Qualidade</li>
                    </ul>
                </Item3Grid>
            </GridValues>

            <CountItensComponent />

        </>
    )
}