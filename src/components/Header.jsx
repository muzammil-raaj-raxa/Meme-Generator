import React from 'react'
import TrollFace from '../assets/troll-face.png'

export default function Header() {
    return (
        <nav>
            <img className='nav-logo' src={TrollFace} alt='Troll Face' />
            <h1 className='nav-title'>Meme Generator</h1>
            <h3 className='nav-desc'>Project by <b>Raaj Raxa</b> </h3>
        </nav>
    )
}
