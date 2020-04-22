import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaRecetas from "./components/ListaRecetas";

import CategoriasProviders from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    //en este caso el hola estara disponible en el componente header y formulario , los datos fluyen
    <CategoriasProviders>
      <RecetasProvider>
        <ModalProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListaRecetas/>
        </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProviders>
  );
}

export default App;
