import { lerEstadoContext } from "./estado-global";

export default function ClienteFilho2() {
  const { estadoAtual, alterarEstado } = lerEstadoContext()

  return (
    <p>E-mail: {estadoAtual.usuario.email}</p>
  )
}