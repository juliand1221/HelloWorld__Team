import React from 'react';
import CelSamsung from './CelSamsung';
import CelXiaomi from './CelXiaomi';
import CelIphone from './CelIphone';
import CelMoto from './CelMoto';
import CelVivo from './CelVivo';

function PagCelular(){
    
    return(
        <div>
           <CelSamsung />
           <CelXiaomi />
           <CelIphone />
           <CelMoto />
           <CelVivo /> 
        </div>
        
    )  
}

export default PagCelular;
