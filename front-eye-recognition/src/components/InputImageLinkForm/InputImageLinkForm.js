import React from 'react';
import './InputImageLinkForm.css';

const InputImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
       <div>
         <p className='f3'>
          {'The Magic Eye Will Detect The Face In A Picture. Git It A Try'}
         </p>
         <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button 
                  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                  onClick={onButtonSubmit}

                >Detect</button>
            </div>
         </div>   
       </div>
    );
}
export default InputImageLinkForm;