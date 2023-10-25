export default async function CepPaginaServidor({ params }) {
  const res = await fetch(`https://viacep.com.br/ws/${params.cep}/json/`)

  if (!res.ok) {
    return <p>Erro!</p>
  }

  const dados = await res.json()

  return (
    <>
      <h1>{dados.cep}</h1>
      {Object.keys(dados).map((k, i) => 
        <p key={i}>
          <b>{k}:</b> {dados[k]}
        </p>  
      )}
    </>
  )
}
