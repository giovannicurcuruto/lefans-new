import CardComponent from "../../components/Card";
import Slider from "react-slick";
import img_acolher from '../../assets/acolher.png';
import img_assis_saude from '../../assets/assistente_saude.png';
import img_maternar from '../../assets/maternar.png';
import img_saude_foco from '../../assets/saude_foco.png';
import img_saude_men from '../../assets/saudemental.png';
import img_wave from '../../assets/g154.png';

import { BackgroundFullDefault, ButtonProgramas, DivSlider, ImgWave1, ImgWave2, InputStyled, MainText, Wrapper } from "./style";
import { useEffect, useRef, useState } from "react";

export default function ProgramasPage() {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    const [slideIndex, ] = useState(0); 

    const sliderRef = useRef<Slider | null>(null);    

    useEffect(() => {
        const updateSettings = () => {
            if(window.innerWidth <= 768) {
                setSettings((prev) => ({
                    ...prev,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }));
            } else {
                setSettings((prev) => ({
                    ...prev,
                    slidesToShow: 3,
                    slidesToScroll: 2
                }))

            }
        }
        updateSettings();
        window.addEventListener('resize', updateSettings);
    
        return () => {
            window.removeEventListener('resize', updateSettings);
        }


    }, []);

    

    return (
        <><ImgWave1 backgroundImage={img_wave} />
            <BackgroundFullDefault>

                <Wrapper>
                    <MainText>
                        <h3>Foco no colaborador para maior produtividade</h3>
                        <p>Oferecemos soluções preventivas integradas, realizadas dentro da própria empresa contratante, para melhorar a cultura organizacional e o bem-estar dos colaboradores.</p>
                    </MainText>

                    <DivSlider>
                        <div className="slider-container">

                            <Slider ref={sliderRef} {...settings}
                            >
                                <div>
                                    <CardComponent
                                        titulo={"Saúde em Foco"}
                                        paragrafo={"Por meio de supervisão constante, é possível identificar alterações na saúde dos colaboradores e realizar intervenções precoces, minimizando riscos e afastamentos. Ministrado por profissionais especializados na área da saúde, o programa inclui atividades como:"}
                                        itens={[
                                            "Avaliações regulares: consultas periódicas para monitorar sinais vitais e sintomas.",
                                            "Educação em saúde: palestras e Workshops sobre manejo de condições crônicas.",
                                            "Apoio psicológico: acompanhamento emocional e motivacional.",
                                            "Orientações: dicas de alimentação, exercícios e manejo do estresse"
                                        ]}
                                        img={img_saude_foco} />

                                </div>
                                <div>
                                    <CardComponent
                                        titulo={"Programa Maternar"}
                                        paragrafo={"O programa proporciona apoio contínuo, esclarecendo dúvidas e orientando sobre saúde e bem-estar, além de incentivar a adesão ao pré-natal, garantindo saúde da mãe e do bebê e a detecção precoce de complicações:"}
                                        itens={[
                                            'Impactos do projeto: resultados positivos na adesão a partos normais.',
                                            'Economia financeira: redução de custos em saúde e prevenção de intervenções médicas.'
                                        ]}
                                        img={img_maternar} />
                                </div>
                                <div>
                                    <CardComponent
                                        titulo={"Programa Acolher"}
                                        paragrafo={"O programa é uma iniciativa destinada a promover o suporte e reintegração dos colaboradores afastados do trabalho, com foco na valorização do ser humano e na recuperação de sua saúde física e emocional"}
                                        img={img_acolher} />
                                </div>

                                <div>
                                    <CardComponent
                                        titulo={"Assistente de Saúde"}
                                        paragrafo={"Estamos disponíveis para oferecer uma avaliação de saúde completa para os colaboradores, contando com uma equipe de profissionais especializados. Nossos serviços incluem:"}
                                        img={img_assis_saude}
                                        itens={[
                                            'Aferição de pressão arterial e glicemia: monitoramento regular para garantir o bem-estar da sua equipe.',
                                            'Orientações sobre saúde: disponibilizamos informações e dicas sobre cuidados preventivos e hábitos saudáveis.',
                                            'Agendamento de consultas e exames: agendamento de consultas e exames no melhor dia e horário para sua equipe.'
                                        ]} />
                                </div>

                                <div>

                                    <CardComponent
                                        titulo={"Programa Estratégico de Saúde Mental Corporativa"}
                                        paragrafo={"Programa idealizado para apoiar empresas na elaboração de ambientes de trabalho saudáveis, oferecendo suporte emocional preventivo e promovendo práticas de autocuidado. O programa baseia-se em um conjunto de ações práticas e direcionadas, que incluem:"}
                                        img={img_saude_men}
                                        itens={[
                                            'Apoio psicológico preventivo: acesso a atendimentos psicológicos individuais ou em grupo, com profissionais especializados.',
                                            'Campanhas de conscientização: ações internas para reforçar a importância da saúde mental.',
                                            'Workshops e treinamentos: sessões educativas e de capacitação sobre técnicas de gerenciamento de estresse e estratégias para lidar com as pressões do trabalho.',
                                            'Monitoramento e acompanhamento: avaliação contínua da eficácia das ações implementadas.'
                                        ]} />
                                </div>
                            </Slider>
                        </div>
                    </DivSlider>
                    <InputStyled
                        onChange={e => sliderRef.current?.slickGoTo(Number(e.target.value))}
                        value={slideIndex}
                        type="range"
                        min={0}
                        max={3}
                    />

                    <ButtonProgramas>Quero conversar com um especialista.</ButtonProgramas>
                    <ImgWave2 backgroundImage={img_wave} />
                </Wrapper>
            </BackgroundFullDefault>
           
        </>
    )
}


/*import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import CardComponent from "../../components/Card";
import img_acolher from '../../assets/acolher.png';
import img_assis_saude from '../../assets/assistente_saude.png';
import img_maternar from '../../assets/maternar.png';
import img_saude_foco from '../../assets/saude_foco.png';
import img_saude_men from '../../assets/saudemental.png';
import img_wave from '../../assets/g154.png';

import {
  BackgroundFullDefault,
  ButtonProgramas,
  DivSlider,
  ImgWave1,
  ImgWave2,
  InputStyled,
  MainText,
  Wrapper
} from "./style";

export default function ProgramasPage() {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  // Atualiza configurações com base na resolução da tela
  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 768) {
        setSettings((prev) => ({
          ...prev,
          slidesToShow: 1,
          slidesToScroll: 1,
        }));
      } else if (window.innerWidth < 1024) {
        setSettings((prev) => ({
          ...prev,
          slidesToShow: 2,
          slidesToScroll: 1,
        }));
      } else {
        setSettings((prev) => ({
          ...prev,
          slidesToShow: 3,
          slidesToScroll: 1,
        }));
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  return (
    <>
      <ImgWave1 backgroundImage={img_wave} />
      <BackgroundFullDefault>
        <Wrapper>
          <MainText>
            <h3>Foco no colaborador para maior produtividade</h3>
            <p>
              Oferecemos soluções preventivas integradas, realizadas dentro da
              própria empresa contratante, para melhorar a cultura organizacional
              e o bem-estar dos colaboradores.
            </p>
          </MainText>

          <DivSlider>
            <div className="slider-container">
              <Slider
                ref={sliderRef}
                {...settings}
                afterChange={() => setUpdateCount(updateCount + 1)}
                beforeChange={(_, next) => setSlideIndex(next)}
              >
                <div>
                  <CardComponent
                    titulo={"Saúde em Foco"}
                    paragrafo={"Por meio de supervisão constante, é possível identificar alterações na saúde dos colaboradores e realizar intervenções precoces, minimizando riscos e afastamentos. Ministrado por profissionais especializados na área da saúde, o programa inclui atividades como:"}
                    itens={[
                      "Avaliações regulares: consultas periódicas para monitorar sinais vitais e sintomas.",
                      "Educação em saúde: palestras e Workshops sobre manejo de condições crônicas.",
                      "Apoio psicológico: acompanhamento emocional e motivacional.",
                      "Orientações: dicas de alimentação, exercícios e manejo do estresse"
                    ]}
                    img={img_saude_foco}
                  />
                </div>
                <div>
                  <CardComponent
                    titulo={"Programa Maternar"}
                    paragrafo={"O programa proporciona apoio contínuo, esclarecendo dúvidas e orientando sobre saúde e bem-estar, além de incentivar a adesão ao pré-natal, garantindo saúde da mãe e do bebê e a detecção precoce de complicações:"}
                    itens={[
                      "Impactos do projeto: resultados positivos na adesão a partos normais.",
                      "Economia financeira: redução de custos em saúde e prevenção de intervenções médicas."
                    ]}
                    img={img_maternar}
                  />
                </div>
                <div>
                  <CardComponent
                    titulo={"Programa Acolher"}
                    paragrafo={"O programa é uma iniciativa destinada a promover o suporte e reintegração dos colaboradores afastados do trabalho, com foco na valorização do ser humano e na recuperação de sua saúde física e emocional"}
                    img={img_acolher}
                  />
                </div>
                <div>
                  <CardComponent
                    titulo={"Assistente de Saúde"}
                    paragrafo={"Estamos disponíveis para oferecer uma avaliação de saúde completa para os colaboradores, contando com uma equipe de profissionais especializados. Nossos serviços incluem:"}
                    img={img_assis_saude}
                    itens={[
                      "Aferição de pressão arterial e glicemia: monitoramento regular para garantir o bem-estar da sua equipe.",
                      "Orientações sobre saúde: disponibilizamos informações e dicas sobre cuidados preventivos e hábitos saudáveis.",
                      "Agendamento de consultas e exames: agendamento de consultas e exames no melhor dia e horário para sua equipe."
                    ]}
                  />
                </div>
                <div>
                  <CardComponent
                    titulo={"Programa Estratégico de Saúde Mental Corporativa"}
                    paragrafo={"Programa idealizado para apoiar empresas na elaboração de ambientes de trabalho saudáveis, oferecendo suporte emocional preventivo e promovendo práticas de autocuidado. O programa baseia-se em um conjunto de ações práticas e direcionadas, que incluem:"}
                    img={img_saude_men}
                    itens={[
                      "Apoio psicológico preventivo: acesso a atendimentos psicológicos individuais ou em grupo, com profissionais especializados.",
                      "Campanhas de conscientização: ações internas para reforçar a importância da saúde mental.",
                      "Workshops e treinamentos: sessões educativas e de capacitação sobre técnicas de gerenciamento de estresse e estratégias para lidar com as pressões do trabalho.",
                      "Monitoramento e acompanhamento: avaliação contínua da eficácia das ações implementadas."
                    ]}
                  />
                </div>
              </Slider>
            </div>
          </DivSlider>
          <InputStyled
            onChange={(e) =>
              sliderRef.current?.slickGoTo(Number(e.target.value))
            }
            value={slideIndex}
            type="range"
            min={0}
            max={3}
          />
          <ButtonProgramas>Quero conversar com um especialista.</ButtonProgramas>
          <ImgWave2 backgroundImage={img_wave} />
        </Wrapper>
      </BackgroundFullDefault>
    </>
  );
}
*/