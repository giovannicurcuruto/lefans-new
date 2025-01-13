import styled from "styled-components";

interface BackgroundImgProps {
  backgroundImage: string;
}

export const BackgroundLightFullDefault = styled.div`
  background-color: var(--main-backgroundLightColor);

  height: 2800px;

  @media (max-width: 768px) {
    height: 4400px;
  }
`;

export const BackgroundColorFullDefault = styled.div`
  background-color: var(--main-background-color);
  padding-top: 130px;
  border-radius: 0 0 300px 0;
  height: 2480px;

  @media (max-width: 768px) {
    padding-top: 40px;
    height: 4000px;
    border-radius: 0 0 200px 0;
  }
`;

export const BackgroundFullDefault = styled.div<BackgroundImgProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: right;
  height: 1200px;

  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Imgbackground = styled.img`
  height: 944px;
  padding-left: 80px;

  @media (max-width: 768px) {
    margin: 0 auto;
    height: 350px;
    padding-left: 25px;
    padding-right: 15px;
  }
`;

export const MainText = styled.div`
  font-style: italic;
  max-width: 1400px;
  padding-left: 132px;
  padding-right: 40px;
  padding-bottom: 90px;

  h2 {
    color: var(--secondary-color);
    font-size: 54px;
    padding-bottom: 30px;
  }

  p {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    padding-left: 25px;
    padding-right: 15px;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 17px;
    }
  }
`;

export const BackgroundImg = styled.div<BackgroundImgProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
`;

export const CenterWrapper = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const ImgLeft = styled.img``;

export const TextCentralSection = styled.div`
  padding-left: 50px;
  font-size: 25px;
  padding-right: 30px;

  h2 {
    font-size: 49px;
    color: var(--secondary-color);
  }
  p {
    font-style: italic;
  }

  button {
    border-radius: 50px;
    color: var(--main-background-color);
    font-size: 31px;
    font-style: italic;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 17px;
    }

    button {
      border-radius: 50px;
      color: var(--main-background-color);
      font-size: 22px;
      font-style: italic;
    }
  }
`;

export const GridBottomPage = styled.div`
  padding-top: 120px;
  padding-left: 150px;
  padding-right: 155px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;

  @media (max-width: 768px) {
    padding-top: 200px;
    padding-left: 25px;
    padding-right: 15px;
    grid-template-columns: none;
    grid-template-rows: 2fr 2fr 2fr;
  }
`;

export const Item1Grid = styled.div`
  max-width: 550px;
  font-size: 24px;
  font-style: italic;

  img {
    padding-bottom: 35px;
  }

  h3 {
    color: var(--secondary-color);
    font-size: 33px;
  }
`;

export const Item2Grid = styled.div`
  max-width: 550px;
  font-size: 24px;
  font-style: italic;

  img {
    padding-bottom: 35px;
  }

  h3 {
    color: var(--secondary-color);
    font-size: 33px;
  }
`;

export const Item3Grid = styled.div`
  font-size: 24px;
  font-style: italic;

  img {
    padding-bottom: 35px;
  }

  h3 {
    color: var(--secondary-color);
    font-size: 33px;
  }
`;

// export const CentralSection = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 2fr;

//     bottom: 1000px;

// `;

// export const ImgLeft = styled.img`
//     height: 617px;

// `;

// export const TextCentralSection = styled.div`
//     padding-top: 100px;
//     padding-left: 30px;

// `;

// export const Imgbackground = styled.img`
//     max-width: 1395.758px;

//     bottom: 90px;

// `;

// export const GridValues = styled.div`
//     display: grid;
//     grid-template-columns: 2fr 2fr 2fr;
//     place-items: center;

//     bottom: 600px;
// `;

// export const Item1Grid = styled.div`

// `;

// export const Item2Grid = styled.div`

// `;

// export const Item3Grid = styled.div`

// `;
