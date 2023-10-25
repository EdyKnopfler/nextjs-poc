'use client';

import { useState } from "react"
import ExibeCep from "./exibe-cep";

export default function CepPaginaCliente() {
  const [dados, setDados] = useState({})

  const submitForm = async (event) => {
    event.preventDefault()
    const cep = event.target.cep.value

    const res = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`, 
      {
        headers: { 'Access-Control-Allow-Origin': '*' }
      }
    )

    if (!res.ok) {
      // TODO elemento de erro
      return console.error('Erro!')
    }

    setDados(await res.json())
    
  }

  return (
    <>
      <h1>Consulta no ViaCEP</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="cep">CEP:</label>
        <input id="cep" name="cep" type="text" />
        <button type="submit">Consultar</button>
      </form>
      <ExibeCep dadosViaCep={dados} />
    </>
  )
}