import * as S from "./styles";

interface ITextField {
  name: string;
  code: string;
  type: string;
  placeholder: string;
}
export default function TextField(props: ITextField) {
  return (
    <S.Container>
      <S.ContainerJustify style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor={props.code}>{`${props.name}*`}</label>
        <input
          type={props.type}
          id={props.code}
          name={props.code}
          placeholder={props.placeholder}
        />
      </S.ContainerJustify>
    </S.Container>
  );
}
