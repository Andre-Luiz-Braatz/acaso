import * as S from "./styles";

interface ITextField {
  name: string;
  code: string;
  type: string;
}
export default function TextField(props: ITextField) {
  return (
    <S.Container>
      <label htmlFor={props.code}>{`${props.name}*`}</label>
      <input
        type={props.type}
        id={props.code}
        name={props.code}
        placeholder={props.name}
      />
    </S.Container>
  );
}