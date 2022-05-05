import React, { Component } from 'react';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Header from './components/header';
import Home from './components/home';



class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Home/>
                <Formulario/>
                <Footer/>

            </div>
        )
    }

}

export default App;