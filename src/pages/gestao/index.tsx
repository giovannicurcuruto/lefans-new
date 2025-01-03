import {
  BackgroundFullDefault,
  ContainerImage,
  MainText,
  NumDiv1,
  NumDiv2,
  NumDiv3,
  NumDiv4,
  Secdiv1,
  Secdiv1Body,
  Secdiv1Titulo,
  Secdiv2,
  Secdiv2Body,
  Secdiv2Titulo,
  Secdiv3,
  Secdiv3Body,
  Secdiv3Titulo,
  Secdiv4,
  Secdiv4Body,
  Secdiv4Titulo,
  Wrapped
} from "./style";

import img1 from '../../assets/fluxo.png';


export default function GestaoPage() {
  return (
    <>
      <BackgroundFullDefault>
        <Wrapped>
          <MainText>
            <h2> Pague o justo, sem surpresas na renovação. </h2>
            <p>Oferecemos um serviço de gestão e consultoria conjunta de planos de saúde, que analisa dados e foca ações na prevenção e bem-estar do colaborador para consequente redução de sinistralidades. Dessa forma, sua empresa pode realizar a renovação ou adequações do plano de saúde corporativo ideal, de acordo com dados reais de utilização.</p>
          </MainText>
          <ContainerImage backgroundImage={img1}>
            <Secdiv1>
              <NumDiv1>1</NumDiv1>
              <Secdiv1Titulo>Contratação do Plano ideal</Secdiv1Titulo>

              <Secdiv1Body>
                Análise detalhada das necessidades
                da empresa e dos colaboradores,
                com negociação junto às
                operadoras para obter o melhor plano.
              </Secdiv1Body>
            </Secdiv1>
            <Secdiv2>
              <NumDiv2>2</NumDiv2>
              <Secdiv2Titulo>Gestão Sustentável</Secdiv2Titulo>

              <Secdiv2Body>
                Monitoramento contínuo do uso
                do plano, promovendo uso
                racional e programas de prevenção.
              </Secdiv2Body>
            </Secdiv2>

            <Secdiv3>
              <NumDiv3>3</NumDiv3>
              <Secdiv3Titulo>Antecipação dos Desafios da Sinistralidade</Secdiv3Titulo>

              <Secdiv3Body>
                Monitoramento de indicadores de saúde
                para identificar riscos e, com esses
                dados, realizar ações preventivas para
                reduzir sinistralidade.
              </Secdiv3Body>
            </Secdiv3>

            <Secdiv4>
              <NumDiv4>4</NumDiv4>
              <Secdiv4Titulo>Renovação e Reajuste</Secdiv4Titulo>

              <Secdiv4Body>
                Negociação de reajustes favoráveis,
                revisão de necessidades e total
                transparência no processo.
              </Secdiv4Body>
            </Secdiv4>



          </ContainerImage>


          <button>Quero conversar com um especialista.</button>

        </Wrapped>
      </BackgroundFullDefault>

    </>
  )
}