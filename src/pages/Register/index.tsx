import * as S from "./styles";
import { ContainerGlass, ImgLogo } from "./styles";
import logoPNG from "../../assets/img/logo.png";
import TextField from "../../components/TextField";

export default function Register() {
  return (
    <S.ContainerAnel className={"full centralizeC"}>
      <ContainerGlass
        style={{ width: "100%", height: "100%" }}
        className={"full centralizeC"}
      >
        <ImgLogo alt={"logo"} src={logoPNG} />
        <S.TitleType>C A D A S T R O</S.TitleType>
        <S.Form>
          <TextField name={"Primeiro nome"} type={"text"} code={"fFirstName"} />
        </S.Form>
      </ContainerGlass>
    </S.ContainerAnel>
  );
}
