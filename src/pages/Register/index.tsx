import anelPNG from "../../assets/img/anel.png";
import glassPNG from "../../assets/img/gas.png";
import logoPNG from "../../assets/img/logo.png";

export default function Register() {
  return (
    <div
      className={"full centralizeC"}
      style={{ background: `url(${anelPNG}) no-repeat right top fixed` }}
    >
      <div
        className={"full centralizeC"}
        style={{ background: `url(${glassPNG}) no-repeat right center fixed` }}
      >
        <img alt={"logo"} src={logoPNG} />
      </div>
    </div>
  );
}
