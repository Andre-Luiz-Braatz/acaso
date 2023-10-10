import styled from "styled-components";
import anelPNG from "../../assets/img/anel.png";
import glassPNG from "../../assets/img/gas.png";

export const ContainerAnel = styled.div`
  @media (min-width: 800px) {
    background: url(${anelPNG}) no-repeat right top fixed;
  }
`;
export const ContainerGlass = styled.div`
  @media (min-width: 800px) {
    background: url(${glassPNG}) no-repeat right center fixed;
    background-size: contain;
  }
`;

export const ContainerDualTextField = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  grid-area: auto;
  gap: 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const ImgLogo = styled.img`
  margin-bottom: 50px;
`;
export const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
`;

export const TitleType = styled.h3`
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 117px;
`;
