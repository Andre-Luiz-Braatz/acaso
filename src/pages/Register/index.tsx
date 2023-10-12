import React, { useEffect, useState } from "react";
import * as S from "./styles";
import logoPNG from "../../assets/img/logo.png";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import * as Request from "../../request";

interface userSubscribe {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  auth_token: string;
}

export default function Register() {
  const onSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Request.post(userSubscribe, (res: object | undefined, error: any): void => {
      if (error)
        alert(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          error?.response?.data?.detail[0].msg ||
            "Something unexpected happened",
        );
      else alert("Conta criada com sucesso!");
    });
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
              code={"first_name"}
              onChange={handleUserSubscribe}
            />
            <TextField
              name={"Último nome"}
              type={"text"}
              code={"last_name"}
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
            code={"auth_token"}
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
