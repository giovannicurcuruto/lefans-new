import styled from "styled-components";

// export const FooterBody = styled.div`
//     position: relative;
//     display: grid;   
//     margin: auto;
//     width: 100%;
//     height: 350px;
//     background-color: var(--main-footer-color);
//     place-items: center;
//     color: #1f426b;
//     padding: 2rem;
//     z-index: 1;

//     @media (max-width: 768px) {
//         padding: 1rem;
//         width: auto;
//         height: auto;
//   }

// `;

// export const FooterAddress = styled.div`
//     text-align: center;
//     font-weight: 800;
//     font-size: 20px;
//     margin-bottom: 2rem;

//     @media (max-width: 768px) {
//         font-size: 16px; /* Reduz o tamanho da fonte em mobile */
//         margin-bottom: 1rem;
//     }
    

// `;

// export const FooterSocialMedia = styled.div`
//     max-width: var(--max-width);
//     font-size: 23px;

//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     gap: 1rem;
    
//     img{
//         width: 199px;

//     }   

//     @media (max-width: 768px) {
//     grid-template-columns: 1fr; /* Itens em uma única coluna */
//     text-align: center; /* Centraliza o conteúdo */
//     gap: 0.5rem; /* Reduz o espaçamento entre os itens */

//     img {
//       width: 150px; /* Reduz o tamanho da logo em mobile */
//     }
//   }
// `;

// export const SpanSocialMedia = styled.span`
//     margin-left: 10px;

//     @media (max-width: 768px) {
//     margin-left: 5px; /* Ajusta o espaçamento em mobile */
//   }
// `;

export const FooterBody = styled.div`
  position: relative;
  display: grid;
  margin: auto;
  height: auto; /* Ajusta para conteúdo dinâmico */
  width: 100%;
  background-color: var(--main-footer-color);
  place-items: center;
  color: #1f426b;
  padding: 2rem; /* Espaçamento para evitar cortes em mobile */
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Ajusta o padding para telas menores */
  }
`;

export const FooterAddress = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 16px; /* Reduz o tamanho da fonte em mobile */
    margin-bottom: 1rem;
    
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Reduz o tamanho da fonte em mobile */
    margin-bottom: 1rem;

    span{
        display: block;
    }
    
  }
`;

export const FooterSocialMedia = styled.div`
  max-width: var(--max-width);
  font-size: 20px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem; /* Espaçamento entre os itens */

  img {
    width: 199px;
    justify-self: center; /* Centraliza a logo */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Itens em uma única coluna */
    text-align: center; /* Centraliza o conteúdo */
    gap: 0.5rem; /* Reduz o espaçamento entre os itens */

    img {
      width: 150px; /* Reduz o tamanho da logo em mobile */
    }
  }

  @media (max-width: 480px) {
    font-size: 18px; /* Ajusta o tamanho da fonte */
    gap: 0.3rem; /* Reduz ainda mais o espaçamento */

    img {
      width: 120px; /* Ajusta o tamanho da logo para celulares pequenos */
    }
  }
`;

export const SpanSocialMedia = styled.span`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 5px; /* Ajusta o espaçamento em mobile */
  }

  @media (max-width: 480px) {
    margin-left: 3px; /* Reduz ainda mais o espaçamento em celulares pequenos */
  }
`;