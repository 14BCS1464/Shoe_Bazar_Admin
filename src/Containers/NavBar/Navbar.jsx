import React from 'react'

import  './Navbar.css'
const Navbar=(props)=>{
    return(
        <div className="navParentStyle">
            <div>
            <button className='' onClick={()=>(props.onKeyPress())}>
                <h1>
                    Home
                </h1>
            </button>
            <button className='' onClick={()=>(props.onKeyPress())}>
                <h1>
                    Home
                </h1>
            </button>
            <button className='' onClick={()=>(props.onKeyPress())}>
                <h1>
                    Home
                </h1>
            </button>
            <button className='' onClick={()=>(props.onKeyPress())}>
                <h1>
                    Home
                </h1>
            </button>
            </div>
        </div>
    )
}


export  default  Navbar
