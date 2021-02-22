import ReactDOM from 'react-dom'
import React from 'react'

import { Navbar } from './components/navbar.jsx'
import Timer from './components/timer.jsx'

const Application = () => {
    const number = Math.floor(Math.random()*2000)
    return(
        <div>
            <Navbar />
            <Timer />
            <h1>{ number }</h1>
        </div>
    )
}

ReactDOM.render(
<Application />,
document.getElementById('app')
)