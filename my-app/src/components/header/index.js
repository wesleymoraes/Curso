import React, { Component} from 'react';
import './style.css';




class Header extends Component {

    render() {
        return(
               <div className='Logo'>
               <img src={require('../../assets/logo-tiki.png')}/>
               </div>
        
        );
    }

}

export default Header;