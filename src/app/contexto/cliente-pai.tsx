import ClienteFilho1 from "./cliente-filho-1";
import ClienteFilho2 from "./cliente-filho-2";
import ComponenteQueAlteraOContexto from "./cliente-filho-dispatcher";
import { EstadoContext, criarEstadoReducer } from "./estado-global";

export default function ClientePai() {
  // Veio do banco de dados, de API externa, da...
  const estadoInicial = {
    usuario: {
      nome: 'Scania', 
      email: 'kania@gato.com' 
    }
  }

  const estadoReducer = criarEstadoReducer(estadoInicial)

  return (
    <EstadoContext.Provider value={estadoReducer}>
      <ClienteFilho1 />
      <ClienteFilho2 />
      <ComponenteQueAlteraOContexto />
    </EstadoContext.Provider>
  )
}