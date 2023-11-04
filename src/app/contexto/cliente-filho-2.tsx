import { useContext } from "react";
import { MeuContexto } from "./cliente-pai";

export default function ClienteFilho2() {
  const { usuario } = useContext(MeuContexto);
  return (
    <p>E-mail: {usuario.email}</p>
  )
}