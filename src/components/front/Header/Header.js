import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { CartCheckFill } from 'react-bootstrap-icons';

function Header({ cartItems }) {
    const CartCountItems = cartItems.length
    console.log("cartItems.length", CartCountItems)
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to="/" className='logo'>
                        SHOPPING-E-APP
                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Signup">Signup</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Cart" className='cart'><CartCheckFill />{CartCountItems === 0 ? "" : <span style={{ color: "red" }} className='CartCountItems'>{CartCountItems}</span>}

                        </Link>

                    </li>
                </ul>


            </div>
        </header>
    )
}

export default Header