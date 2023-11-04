import { useContext } from "react";
import { EstadoContext } from "./estado-global";

export default function ClienteFilho2() {
  const estadoReducer = useContext(EstadoContext);
  const [ estadoAtual, alterarEstado ] = estadoReducer
  
  return (
    <p>E-mail: {estadoAtual.usuario.email}</p>
  )
}