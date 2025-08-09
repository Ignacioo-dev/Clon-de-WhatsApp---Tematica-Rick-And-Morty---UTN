import React from 'react'
import './NewMensaje.css'

function NewMensaje({add_new_menssage}) {

    const handSubmitSedMenssageForm = (event) =>{
        event.preventDefault()
        let new_mensaje_text = event.target.message.value
        add_new_menssage(new_mensaje_text)
        event.target.message.value = ''
    }

    return (
        <div>
            <div className="contenedor_new_menssage">
                <div className="cont_input">
                    <div className="text">
                        <form onSubmit={handSubmitSedMenssageForm}>
                            <label htmlFor="message" id='message'></label>
                            <input type="text" placeholder='Escribir un Mensaje' id='message' name='message' autoComplete='off'/>
                            <button type='submit'>envia</button>
                        </form>
                    </div>
                    <div className="enviar">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMensaje