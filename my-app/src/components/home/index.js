import React, { Component } from 'react';
import './style.css';
import SimpleSlider from '../slick';
class Home extends Component {
    render() {
        return (
            <div className='ContainerHome'>
                <h2>Cuidado, Ao rolar pode conter...</h2>
              
            
                <div className='iconYellow'>
                    <img src={require('../../assets/icon-yellow.png')} />
                </div>
                <div className='tittle1'>
                    <img src={require('../../assets/tittle1.png')} />
                </div>
                <div className='ArrowDown'>
                <img src={require('../../assets/arrowdown.png')} />
                </div>
                <h3>Você já estava sabendo?</h3>
                <div>    <SimpleSlider/></div> 
                <h3 className='subtittle'>Confira o que já saiu e o que está por vir</h3>
            </div>

        )
    }

}

export default Home;