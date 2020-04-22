//los datos fluyen de este context, cuando utilizas props o redux es diferente
import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

//crear el context
export const CategoriasContext = createContext();

//El provider es de donde van a salir los datos y las funciones, state
const CategoriasProviders = (props) => {
    //Crear el state del context
    const [categorias,guardarCategorias] = useState([]);

    //ejecutar el llamado a la API
    useEffect(()=>{
        const obtenerCategorias = async () =>{
            const obtenerCategorias = async () => {
                const url = 'https:www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

                const categorias = await axios.get(url);

                guardarCategorias(categorias.data.drinks);
            }
            obtenerCategorias();
        }
        obtenerCategorias();
    },[]);

    /*lo que esta en el return van a ser los datos y todo lo que va a estar
    disponible para diferentes componentes,lo que va "fluir"*/

    return(
        <CategoriasContext.Provider
        value={{
            //colocamos aca todo lo que estara disponible
            categorias
        }}
        >
        {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProviders;