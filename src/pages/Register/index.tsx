import React, { useEffect, useState } from "react";
import * as S from "./styles";
import logoPNG from "../../assets/img/logo.png";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import * as Request from "../../request";

interface userSubscribe {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const onSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("onSubscribe");
    Request.post(
      userSubscribe,
      (res: object | undefined, error: object | undefined): void => {
        console.log("ok", res, error);
      },
    );
  };

  const [userSubscribe, setUserSubscribe] = useState<userSubscribe>(
    {} as userSubscribe,
  );

  const handleUserSubscribe = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setUserSubscribe({ ...userSubscribe, [name]: value.trim() });
  };

  useEffect(() => {
    console.log("userSubscribe", userSubscribe);
  }, [userSubscribe]);

  return (
    <S.ContainerAnel>
      <S.ContainerGlass>
        <S.ImgLogo alt={"logo"} src={logoPNG} />
        <S.TitleType>cadastro</S.TitleType>
        <S.Form onSubmit={onSubscribe}>
          <S.ContainerDualTextField>
            <TextField
              name={"Primeiro nome"}
              placeholder={"Primeiro nome"}
              type={"text"}
              code={"firstName"}
              onChange={handleUserSubscribe}
            />
            <TextField
              name={"Último nome"}
              type={"text"}
              code={"lastName"}
              placeholder={"Último nome"}
              onChange={handleUserSubscribe}
            />
          </S.ContainerDualTextField>
          <TextField
            name={"E-mail"}
            placeholder={"Seu@email.com"}
            type={"text"}
            code={"email"}
            onChange={handleUserSubscribe}
          />
          <TextField
            name={"Senha"}
            placeholder={"******"}
            type={"password"}
            code={"password"}
            onChange={handleUserSubscribe}
          />
          <TextField
            name={"Confirme a senha"}
            placeholder={"******"}
            type={"password"}
            code={"confirmPassword"}
            onChange={handleUserSubscribe}
          />
          <S.ContainerActions>
            <p>Não possui uma conta?</p>
            <Button name={"Criar minha conta aca.so"} />
            <S.ActionBack>
              <Button
                code={"aBack"}
                name={"Voltar ao login"}
                background={"#FFFFFF1A"}
                color={"white"}
              />
            </S.ActionBack>
          </S.ContainerActions>
        </S.Form>
      </S.ContainerGlass>
    </S.ContainerAnel>
  );
}
