import React from 'react';

const Navigation = ({onRouteChange,isSignedIn}) => {
    if(isSignedIn){
        return (
        <nav className='topnav' style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signout')} className='f4 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
        );
    }else{
        return (
            <nav className='topnav' style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={()=>onRouteChange('signin')} className='f4 link dim black underline pa3 pointer'>Sign In</p>
            </nav>
            );

    }
}
export default Navigation;