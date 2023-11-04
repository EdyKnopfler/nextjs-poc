import { useCallback, useContext } from "react"
import { ACAO_ALTERAR_USUARIO, EstadoContext, criarEstadoReducer } from "./estado-global"

export default function ComponenteQueAlteraOContexto() {
  const estadoReducer = useContext(EstadoContext);
  const [ estadoAtual, alterarEstado ] = estadoReducer

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