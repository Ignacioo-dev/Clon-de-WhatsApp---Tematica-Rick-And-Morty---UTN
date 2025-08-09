import React, { useState, useEffect } from 'react'
import './ChatScreen.css'
import { useParams } from 'react-router'
/* import { getContactById } from '../../Servicios/JS_Servis_Contac' */
import { getContactById } from '../../Servicios/servis_contac.js'
import { MenssageList } from '../MenssageList/MenssageList.jsx'
import NewMensaje from '../Newmensaje/NewMensaje.jsx'

const ChatScreen = () => {
    const { contact_id } = useParams()
    const [nombre, setNombre] = useState('')
    const [avatar, setAvatar] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [menssages, setMenssages] = useState([])

    // Cada vez que cambia el contact_id, se cargan nuevos mensajes
    useEffect(() => {
        const contact = getContactById(contact_id)
        if (contact) {
            setNombre(contact.nombre)
            setAvatar(contact.avatar)
            setDescripcion(contact.descrip)
            setMenssages(contact.messages)
        }
    }, [contact_id]) // <- se ejecuta cuando cambia el Id del usuaro

    const deleteMenssageBy_id = (menssages_id) => {
        const filtered = menssages.filter(m => m.id !== menssages_id)
        setMenssages(filtered)
    }

    const add_new_menssage = (text) => {
        const new_menssage = {
            emisor: 'YO',
            hora: '12:00',
            texto: text,
            status: 'no-visto',
            id: menssages.length + 1,
        }
        setMenssages(prev => [...prev, new_menssage])
    }

    return (
        <div>
            <div className="encabezado">
                <div className="perfil">
                    <img src={avatar} className="avatar" alt="" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '3px solid #144d37'
                            }} />
                </div>
                <div className="usuario">
                    <h1>{nombre}</h1>
                    <samp>{descripcion}</samp>
                </div>
            </div>
            <div className="mensajeria">
                <div className="mensajes">
                <MenssageList menssages={menssages} deleteMenssageBy_id={deleteMenssageBy_id} />
            </div>
            <div className="new_mensajes">
                <NewMensaje add_new_menssage={add_new_menssage} />
            </div>
            </div>
        </div>
    )
}

export default ChatScreen
