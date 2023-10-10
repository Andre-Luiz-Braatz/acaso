import * as S from "./styles";
import logoPNG from "../../assets/img/logo.png";
import TextField from "../../components/TextField";

export default function Register() {
  return (
    <S.ContainerAnel className={"full centralizeC"}>
      <S.ContainerGlass
        style={{ width: "100%", height: "100%" }}
        className={"full centralizeC"}
      >
        <S.ImgLogo alt={"logo"} src={logoPNG} />
        <S.TitleType>C A D A S T R O</S.TitleType>
        <S.Form>
          <S.ContainerDualTextField>
            <TextField
              name={"Primeiro nome"}
              type={"text"}
              code={"fFirstName"}
            />
            <TextField name={"Último nome"} type={"text"} code={"fFirstName"} />
          </S.ContainerDualTextField>
        </S.Form>
      </S.ContainerGlass>
    </S.ContainerAnel>
  );
}
