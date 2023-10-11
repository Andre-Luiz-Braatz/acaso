import styled from "styled-components";

interface Props {
  background?: string;
  color?: string;
}

export const Button = styled.button<Props>`
  max-width: 19rem;
  width: 100%;
  height: 3.3rem;
  border-radius: 30px;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  border: 0;
  outline: 0;
  background-color: ${(e) => e.background};
  color: ${(e) => e.color};
  //&:focus {
  //  outline: 2px solid var(--pink);
  //}
`;
