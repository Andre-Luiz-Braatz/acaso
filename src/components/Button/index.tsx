import React from "react";
import * as S from "./styles";

interface IButton {
  name: string;
  onClick?: any;
}
export default function Button(props: IButton) {
  return <S.Button onClick={props.onClick}>{props.name}</S.Button>;
}
