import React from 'react'
import { FaCoins } from 'react-icons/fa'
import './NavbarCoins.css'

const NavbarCoins = () => {
    return (
        <div className='navbarcenter'>
            <FaCoins className='iconscolor' />
            <h1 className='CoinHead'>Coin <span className='search'>Search</span></h1>
        </div>
    )
}

export default NavbarCoins  