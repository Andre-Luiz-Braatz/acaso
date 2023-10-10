import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Raleway, sans-serif;
  width: 100%;
  align-items: center;
  justify-content: center;

  label {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1rem;
    margin-left: 0.6rem;
    max-width: 339px;
    margin-bottom: 0.3rem;
  }

  input {
    background-color: var(--gray);
    padding: 0.9rem 0.8rem 0.8rem 1.3rem;
    border-radius: 0.3rem;
    border: none;
    font-size: 0.7rem;
    font-weight: 400;
    outline: 0;
    color: #f6f6f6;
    width: 100%;
    //max-width: 29rem;
    //min-width: 14rem;
    &:focus {
      outline: 1px solid var(--pink);
    }
  }
`;

export const ContainerJustify = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
