import './loading.css';

function meuEvento(){
    console.log('ativado')

}
function Evento() {
    return (
 
        <div>
            <button onClick={meuEvento}>Enviar </button>
        </div>

    )
}

export default Evento