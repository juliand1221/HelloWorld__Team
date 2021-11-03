import React from 'react'
import HeaderTwo from 'components/HeaderTwo';

export default function LayoutLog({children}) {
    return (
        <div>
            <HeaderTwo/>
            <main>{children}</main>
            
        </div>
    )
}
