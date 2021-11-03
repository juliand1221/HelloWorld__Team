import React from 'react';
import TabSamsung from './TabHuawei';
import TabletSamsung from './TabletSamsung';
import TabLenovo from './TabLenovo';
import TabIpad from './TabIpad';

function pagTablet(){
    return(
        <div>
            <TabSamsung />
            <TabletSamsung />
            <TabLenovo />
            <TabIpad />
        </div>
    )  
}

export default pagTablet;