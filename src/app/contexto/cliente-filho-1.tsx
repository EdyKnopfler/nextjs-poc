import { useContext } from "react"
import { EstadoContext } from "./estado-global";

export default function ClienteFilho1() {
  const estadoReducer = useContext(EstadoContext);
  const [ estadoAtual, alterarEstado ] = estadoReducer

  return (
    <p>Nome: {estadoAtual.usuario.nome}</p>
  )
}