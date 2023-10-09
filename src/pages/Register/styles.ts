import styled from "styled-components";
import anelPNG from "../../assets/img/anel.png";
import glassPNG from "../../assets/img/gas.png";

export const ContainerAnel = styled.div`
  background: url(${anelPNG}) no-repeat right top fixed;
`;
export const ContainerGlass = styled.div`
  background: url(${glassPNG}) no-repeat right center fixed;
  background-size: contain;
`;
export const ImgLogo = styled.img`
  margin-bottom: 50px;
`;
export const Form = styled.form`
  margin-bottom: 50px;
`;

export const TitleType = styled.h3`
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 117px;
`;
