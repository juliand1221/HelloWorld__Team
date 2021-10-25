import React from 'react'
import SideBar from 'components/Sidebar'



export default function LayoutAdmin({children}) {
    return (
        <div>
            <SideBar/>
            <main>{children}</main>
            
        </div>
    )
}
