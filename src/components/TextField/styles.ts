import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-family: Raleway, sans-serif;

  label {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    margin-left: 11px;
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
    &:focus {
      outline: 1px solid var(--pink);
    }
  }
`;