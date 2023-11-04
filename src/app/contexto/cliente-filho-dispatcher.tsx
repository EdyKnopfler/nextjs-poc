import { useCallback } from "react"
import { ACAO_ALTERAR_USUARIO, lerEstadoContext } from "./estado-global"

export default function ComponenteQueAlteraOContexto() {
  const { estadoAtual, alterarEstado } = lerEstadoContext()

  const alterarClick = useCallback(() => {
    alterarEstado({ 
      tipo: ACAO_ALTERAR_USUARIO,
      dados: {
        ...estadoAtual,
        usuario: {
          nome: estadoAtual.usuario.nome + ' sim!',
          email: estadoAtual.usuario.email + ' não!'
        }
      }
    })
  }, [estadoAtual, alterarEstado])

  return (
    <p>
      <button onClick={alterarClick}>Alterar!</button>
    </p>
  )
}