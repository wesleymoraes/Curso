import React, { Component } from 'react';
import './style.css';




class Formulario extends Component{
    render(){
        return(
            <div>
                <div className='Tittle2'>
                    <img src={require('../../assets/tittle2.png')} />
                </div>

                <div className='Form'>
                <form className='Formulario'>
                    <h3 className='TittleForm'>Cadastre-se e fique por dentro<br/> das novidades</h3> <br/>
                <input className='Nome' type='text' placeholder='Nome'/> 
           
                <input className='Email' type='text' placeholder='Email' />
                <br/>
                <label id='Concordo' >
                <input type='radio'/>
                Declaro que li e aceito a politica de privacidade
                </label>
                <br/>
                <button className='Submit'> Enviar </button>
                </form>

                </div>

            </div>
        )
    }

}

export default Formulario;