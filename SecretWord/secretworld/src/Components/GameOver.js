import React from "react";
import './GameOver.css'
    const GameOver = ({retry}) => {
    return (
        <div>
       <h1>fIM DE JOGO!</h1>
       <h2>A sua pontuação foi: <span></span></h2>
       <button onClick={retry}> Reiniciar</button>
        </div>
    )
}
export default GameOver