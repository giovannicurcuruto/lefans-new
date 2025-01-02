import styled from "styled-components";

export const BackgroundFullDefault = styled.div`
    background-color: var(--main-background-color);

`;

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1395.758px;
    width: 1200px;
    background-color: var(--main-background-color);
`;

export const MainText = styled.div`
    padding: 125px;
    max-width: 840px;

    h3 {
        font-size: 41px;
        color: var(--secondary-color);
        padding-bottom: 30px;
    }
    p {
        font-size: 22px;
        font-style: italic;
    }
    


`;


export const DivSlider = styled.div`
    padding-left: 125px;
    padding-bottom: 195px;

`;


export const Item = styled.div`


`;

export const GridItem1 = styled.div`

`;

export const Item2 = styled.div`


`;

export const InputStyled = styled.input.attrs({
    
    type: 'range',
  })`
    -webkit-appearance: none;
    width: 100%; /* Largura do slider */
    height: 22px; /* Altura da linha do slider */
    background: #0c294e; /* Cor de fundo da linha */
    border-radius: 4px; /* Bordas arredondadas */
    outline: none; /* Remove contorno padrão */
    transition: opacity 0.3s; /* Suaviza a mudança de opacidade */
    opacity: 0.9;

    margin-bottom: 115px;
  
    &:hover {
      opacity: 1; /* Realce ao passar o mouse */
    }
  
    /* Estilo do thumb (controle deslizante) para navegadores baseados em WebKit */
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 450px;
      height: 35px;
      background: #d8d6c9; /* Cor do controle deslizante */
      border-radius: 15px; /* Deixa o thumb circular */
      cursor: pointer; /* Mostra o cursor de ponteiro */
    }
  
    /* Estilo do thumb para navegadores baseados em Gecko (Firefox) */
    &::-moz-range-thumb {
      width: 450px;
      height: 35px;
      background: #d8d6c9;
      border-radius: 15px;
      cursor: pointer;
    }
  
    /* Ajuste da aparência do track para navegadores baseados em Gecko */
    &::-moz-range-track {
      background: #0c294e;
      border-radius: 4px;
    }
  `;

  export const ButtonProgramas = styled.button`
    position: relative;
    bottom: 510px;    
    margin-left: 125px;
    border-radius: 25px;
    font-style: italic;
    color: var(--main-background-color);
  `;

  export const ImgWave2 = styled.img`    
    width: 100%;
    height: 50%;
  `;