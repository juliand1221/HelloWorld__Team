import React from 'react';
import PorLenovo from './PorLenovo';
import PorHp from './PorHp';
import PorAsus from './PorAsus';
import PorAcer from './PorAcer';
import PorHuawei from './PorHuawei';

function ProPorta(){
    
    return(
        <div>
           <PorLenovo />
           <PorHp />
           <PorAsus />
           <PorAcer />
           <PorHuawei /> 
        </div>
    )  
}
export default ProPorta;