import { createContext, useReducer } from "react"

export const EstadoContext = createContext({
  usuario: {
    nome: '',
    email: '',
  }
})

export const ACAO_ALTERAR_USUARIO = 'ACAO_ALTERAR_USUARIO'

function estadoReducer(estadoAtual, acao) {
  const { dados, tipo } = acao || {}

  switch (tipo) {
    case ACAO_ALTERAR_USUARIO:
      return {
        ...estadoAtual,
        usuario: { nome: dados.usuario.nome, email: dados.usuario.email }
      }

    // outras ações...
  
    default:
      return estadoAtual
  }
}

export function criarEstadoReducer(
  estadoInicial: { usuario: { nome: string, email: string } }
) {
  return useReducer(estadoReducer, estadoInicial)
}

