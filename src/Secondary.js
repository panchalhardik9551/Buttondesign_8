import React from 'react'
import Danger from './Danger'

export default function Secondary() {
    return (
        <>
            <button style={{background:"gray", color:"white", margin:"10px", padding:"5px", cursor:"pointer"}}>Secondary</button>
            <Danger />
        </>
    )
}
