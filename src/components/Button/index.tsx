import React from "react";
import * as S from "./styles";

interface IButton {
  name: string;
  code?: string;
  onClick?: any;
  background?: string;
  color?: string;
}
export default function Button(props: IButton) {
  return (
    <S.Button
      id={props.code}
      onClick={props.onClick}
      background={props.background}
      color={props.color}
    >
      {props.name}
    </S.Button>
  );
}
