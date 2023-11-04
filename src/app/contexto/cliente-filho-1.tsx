import { useContext } from "react"
import { MeuContexto } from "./cliente-pai";

export default function ClienteFilho1() {
  const { usuario } = useContext(MeuContexto);
  return (
    <p>Nome: {usuario.nome}</p>
  )
}