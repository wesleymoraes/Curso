import React, { Component } from 'react';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Header from './components/header';
import Home from './components/home';
import Evento from './components/Formulario/loading'




class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Home/>
                <Formulario/>
                <Footer/>
                <Evento/>

            </div>
        )
    }

}

export default App;