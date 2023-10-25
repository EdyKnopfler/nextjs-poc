export default function ExibeCep({ dadosViaCep }) {
  return (
    <>
      {Object.keys(dadosViaCep).map((k, i) => 
        <p key={i}>
          <b>{k}:</b> {dadosViaCep[k]}
        </p>  
      )}
    </>
  )
}