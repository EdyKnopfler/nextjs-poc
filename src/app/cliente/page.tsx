'use client';

import { useState } from "react"
import ExibeCep from "./exibe-cep";

export default function CepPaginaCliente() {
  const [dados, setDados] = useState({})
  const [erro, setErro] = useState('')

  const submitForm = async (event) => {
    event.preventDefault()
    const cep = event.target.cep.value

    try {
      const res = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`, 
        {
          headers: { 'Access-Control-Allow-Origin': '*' }
        }
      )

      setErro('')
      setDados(await res.json())
    } catch (e) {
      setErro(e+'')
      setDados({})
    }
  }

  return (
    <>
      <h1>Consulta no ViaCEP</h1>

      {erro && <p>Erro: {erro}</p>}

      <form onSubmit={submitForm}>
        <label htmlFor="cep">CEP:</label> <br />
        <input id="cep" name="cep" type="text" />
        <button type="submit">Consultar</button>
      </form>

      <ExibeCep dadosViaCep={dados} />
    </>
  )
}