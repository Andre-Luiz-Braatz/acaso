import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Raleway, sans-serif;
  width: 100%;
  align-items: center;
  justify-content: center;

  label {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    margin-left: 11px;
    max-width: 339px;
    margin-bottom: 5px;
  }

  input {
    background-color: var(--gray);
    padding: 15px 14px 14px 23px;
    border-radius: 6px;
    border: none;
    font-size: 12px;
    font-weight: 400;
    outline: 0;
    color: #f6f6f6;
    width: 100%;
    max-width: 489px;
    min-width: 232px;
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
