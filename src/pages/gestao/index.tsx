import { MainText, Step, StepIcon, StepNumber, StepText, TimelineContainer, TimelineCurve } from "./style";

export default function GestaoPage(){
    return(
        <>
        <MainText>
           <h2> Pague o justo, sem surpresas na renovação. </h2> 
           <p>Oferecemos um serviço de gestão e consultoria conjunta de planos de saúde, que analisa dados e foca ações na prevenção e bem-estar do colaborador para consequente redução de sinistralidades. Dessa forma, sua empresa pode realizar a renovação ou adequações do plano de saúde corporativo ideal, de acordo com dados reais de utilização.</p>
        </MainText>
        
        <TimelineContainer>
      <TimelineCurve />
      <Step>
        <StepNumber>1</StepNumber>
        <StepIcon src="/path/to/icon1.svg" alt="Icon 1" />
        <StepText>
          <strong>Contratação do plano ideal</strong>
          <br />
          Análise detalhada das necessidades da empresa e negociação para o melhor plano.
        </StepText>
      </Step>
      <Step>
        <StepNumber>2</StepNumber>
        <StepIcon src="/path/to/icon2.svg" alt="Icon 2" />
        <StepText>
          <strong>Gestão Sustentável</strong>
          <br />
          Monitoramento contínuo do plano promovendo uso racional.
        </StepText>
      </Step>
      <Step>
        <StepNumber>3</StepNumber>
        <StepIcon src="/path/to/icon3.svg" alt="Icon 3" />
        <StepText>
          <strong>Antecipação dos desafios</strong>
          <br />
          Monitoramento de indicadores de saúde para reduzir sinistralidade.
        </StepText>
      </Step>
      <Step>
        <StepNumber>4</StepNumber>
        <StepIcon src="/path/to/icon4.svg" alt="Icon 4" />
        <StepText>
          <strong>Renovação e Reajuste</strong>
          <br />
          Negociação de ajustes favoráveis com total transparência.
        </StepText>
      </Step>
    </TimelineContainer>

    <button>Quero conversar com um especialista.</button>
        
        </>
    )
}