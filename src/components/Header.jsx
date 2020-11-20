import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>

            <div className="header__top">
                <div className="header__top-inner">
                    <Link to='/'>
                        <div className="logo-link">link</div>
                    </Link>
                    <a className="header__top-phone" href="tel:88003020060">8 800 302-00-60
                    <span>Звонок бесплатный</span>
                    </a>
                </div>
            </div>

        </header>
    )
}

export default Header;