// import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import eye from './eye.png';

// 👽

const Logo = () => {
    return (
       <div className='ma5 mt3'>
        <Tilt className="Tilt br5 shadow-5" options={{ max : 35 , perspective:100}} style={{ height: 85, width: 85 }} >
           <div className="Tilt-inner">
            <img alt='logo' src={eye}/>
           </div> 
        </Tilt>
       </div>
    );
}
export default Logo;