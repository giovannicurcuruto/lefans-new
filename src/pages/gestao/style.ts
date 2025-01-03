import styled from "styled-components";

interface ContainerImageProps {
  backgroundImage: string
}

export const MainText = styled.div`
  padding-top: 153px;
  padding-bottom: 105px;
  max-width: 1357px;

  h2{
    font-size: 55px;
    font-style: italic;
    color: var(--secondary-color);
    padding-bottom: 27px;
  }

  p{
    font-size: 29px;
    font-style: italic;
  }
`;

export const BackgroundFullDefault = styled.div`
  background-color: var(--main-background-color);
`;

export const Wrapped = styled.div`
  padding-left: 135px;
  padding-right: 135px;
  
  button {
        
        border-radius: 25px;
        font-size: 32px;
    }

`;

export const ContainerImage = styled.div<ContainerImageProps>`
  background-position: center;
  background-image: url(${(props) => props.backgroundImage});
  height: 2434.675px;
  background-repeat: no-repeat;
`;

export const NumDiv1 = styled.div`
  color: var(--secondary-color);
  font-style: italic;
  font-size: 100px;
`;

export const NumDiv2 = styled.div`
  color: var(--secondary-color);
  font-style: italic;
  font-size: 100px;
`;

export const NumDiv3 = styled.div`
  color: var(--secondary-color);
  font-style: italic;
  font-size: 100px;
`;

export const NumDiv4 = styled.div`
  color: var(--secondary-color);
  font-style: italic;
  font-size: 100px;
`;

export const Secdiv1 = styled.div`
  max-width: 550px;
`;

export const Secdiv2 = styled.div`
  max-width: 550px;
`;

export const Secdiv3 = styled.div`
  max-width: 550px;
`;

export const Secdiv4 = styled.div`
  max-width: 550px;
`;

export const Secdiv1Titulo = styled.div`
  font-size: 1.4375rem;
`;

export const Secdiv2Titulo = styled.div`
  font-size: 1.4375rem;
`;

export const Secdiv3Titulo = styled.div`
  font-size: 1.4375rem;
`;

export const Secdiv4Titulo = styled.div`
  font-size: 1.4375rem;
`;

export const Secdiv1Body = styled.div`
  font-size: 1.125 rem;
`;

export const Secdiv2Body = styled.div`
  font-size: 1.125 rem;
`;

export const Secdiv3Body = styled.div`
  font-size: 1.125 rem;
`;

export const Secdiv4Body = styled.div`
  font-size: 1.125 rem;
`;
