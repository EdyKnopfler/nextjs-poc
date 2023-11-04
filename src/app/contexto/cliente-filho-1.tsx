import { lerEstadoContext } from "./estado-global";

export default function ClienteFilho1() {
  const { estadoAtual, alterarEstado } = lerEstadoContext()

  return (
    <p>Nome: {estadoAtual.usuario.nome}</p>
  )
}