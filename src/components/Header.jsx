import React from 'react'
import moneyImage from '/investment-calculator-logo.png';

const Header = () => {
  return (
    <header id="header">
        <img src={moneyImage} alt="hwll" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header