import React from 'react'
import { Menssage } from '../Menssage/Menssage.jsx'

export const MenssageList = ({menssages, deleteMenssageBy_id}) => {
const mensajes = menssages.map(
    function(mensaje){
        return <Menssage 
        key={mensaje.id}
        emisor={mensaje.emisor}
        hora={mensaje.hora}
        id={mensaje.id}
        texto={mensaje.texto}
        status={mensaje.status}
        deleteMenssageBy_id = {deleteMenssageBy_id}/>
    }
)
    return (
        <div> 
            {mensajes}
        </div>
    )
}
