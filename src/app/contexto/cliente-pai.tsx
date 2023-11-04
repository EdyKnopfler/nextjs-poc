import { createContext } from "react";
import ClienteFilho1 from "./cliente-filho-1";
import ClienteFilho2 from "./cliente-filho-2";

export const MeuContexto = createContext({
  usuario: { 
    nome: '', 
    email: '' 
  }
})

export default function ClientePai() {
  // Veio do banco de dados, de API externa, da...
  const usuario = { nome: 'Scania', email: 'kania@gato.com' }

  return (
    <MeuContexto.Provider value={{usuario}}>
      <ClienteFilho1 />
      <ClienteFilho2 />
    </MeuContexto.Provider>
  )
}