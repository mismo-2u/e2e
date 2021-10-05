import React from 'react';
import './EyeDetectionTool.css';

const EyeDetectionTool = ({imgUrl,box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2 br2'>
                <img id='eyeframe' alt='4Real' src={imgUrl} width='450px' height='auto'/>
                <div className='bounding-box' style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>
            </div>
        </div>
    );
}
export default EyeDetectionTool;