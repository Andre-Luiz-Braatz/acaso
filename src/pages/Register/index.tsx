import React from "react";
import * as S from "./styles";
import logoPNG from "../../assets/img/logo.png";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

export default function Register() {
  const onSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("onSubscribe");
  };

  return (
    <S.ContainerAnel className={"full centralizeC"}>
      <S.ContainerGlass
        style={{ width: "100%", height: "100%" }}
        className={"full centralizeC"}
      >
        <S.ImgLogo alt={"logo"} src={logoPNG} />
        <S.TitleType>cadastro</S.TitleType>
        <S.Form onSubmit={onSubscribe}>
          <S.ContainerDualTextField>
            <TextField
              name={"Primeiro nome"}
              placeholder={"Primeiro nome"}
              type={"text"}
              code={"fFirstName"}
            />
            <TextField
              name={"Último nome"}
              type={"text"}
              code={"fLastName"}
              placeholder={"Último nome"}
            />
          </S.ContainerDualTextField>
          <TextField
            name={"E-mail"}
            placeholder={"Seu@email.com"}
            type={"text"}
            code={"fEmail"}
          />
          <TextField
            name={"Senha"}
            placeholder={"******"}
            type={"password"}
            code={"fPassword"}
          />
          <TextField
            name={"Confirme a senha"}
            placeholder={"******"}
            type={"password"}
            code={"fPasswordConfirm"}
          />
          <Button name={"Criar minha conta aca.so"} />
        </S.Form>
      </S.ContainerGlass>
    </S.ContainerAnel>
  );
}
