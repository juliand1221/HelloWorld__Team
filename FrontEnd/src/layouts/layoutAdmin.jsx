import React from 'react'
import SidebarTwo from 'components/SidebarTwo'



export default function LayoutAdmin({children}) {
    return (
        <div>
            <SidebarTwo />
            <main>{children}</main>
            
        </div>
    )
}
