import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';
import Receta from '../components/Receta';

//crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state del provider,queremos guardar el id del que el user le de click
    const [idreceta,guardarIdReceta] = useState(null);

    const [informacion,guardarReceta] = useState({

    });

    //una vez que tenemos una receta,llamar la api
    useEffect( () => {
        const obtenerReceta = async () => {
            //si NO hay receta, return para que no ejecute nada
            if(!idreceta) return;

            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await axios.get(url);

            guardarReceta(resultado.data.drinks[0]);


        }
        obtenerReceta();
    },[idreceta]);


    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;
