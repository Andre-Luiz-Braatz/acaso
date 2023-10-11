import React from "react";
import * as S from "./styles";

interface IRedirect {
  name: string;
  onClick?: any;
}
export default function Redirect(props: IRedirect) {
  return <S.Redirect onClick={props.onClick}>{props.name}</S.Redirect>;
}
