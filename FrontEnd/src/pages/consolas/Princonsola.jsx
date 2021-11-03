import React from 'react';
import ConsoSwitch from './ConsoSwitch';
import ConsoPlay from './ConsoPlay';
import ConsoXbox from './ConsoXbox';

function ProConsol(){
    return(
        <div>
            <ConsoSwitch />
            <ConsoPlay />
            <ConsoXbox />
        </div>
    )  
}

export default ProConsol;