import styled from "styled-components";
import anelPNG from "../../assets/img/anel.png";
import glassPNG from "../../assets/img/gas.png";

export const ContainerAnel = styled.div`
  //padding: 2.7rem;
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
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  grid-area: auto;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const ImgLogo = styled.img`
  margin-bottom: 3rem;
`;
export const Form = styled.form`
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 30rem;
  padding: 2.7rem;
`;

export const TitleType = styled.h3`
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 1.9rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  @media (min-width: 800px) {
    letter-spacing: 0.9rem;
    text-transform: uppercase;
    font-size: 3rem;
    margin-bottom: 7rem;
  }
`;
