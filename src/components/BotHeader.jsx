import React from 'react'
import { Sticky } from 'react-sticky';
import { Link } from 'react-router-dom';
import ButtonCart from './Button';
import { useSelector } from 'react-redux';


function BotHeader() {
    
    const { totalPrice } = useSelector(({ cart }) => cart);

    return (
        <Sticky>
            {({style, }) => (
                <div style={style} className='head-wrapper'>
                    <div className="head-container">
                        <div className="header__bot container bot-header">
                            <Link to='/cart'>
                                <ButtonCart>{totalPrice ? totalPrice + ' ₴' : 'Корзина'}</ButtonCart>
                            </Link>
                            <nav className="bot-header__nav nav-header _anim-nav" >
                                <ul className="nav-header__list">
                                    <li className="nav-header__link">
                                        <a href="/#block-menu">
                                            <div className="nav-header__link-child" id="head1">Меню</div>
                                        </a>
                                    </li>
                                    <li className="nav-header__link">
                                        <a href="/#block-disc">
                                            <div className="nav-header__link-child" id="head2">Акции</div>
                                        </a>
                                    </li>
                                    <li className="nav-header__link">
                                        <a href="/#block-deliv">
                                            <div className="nav-header__link-child" id="head3">Доставка</div>
                                        </a>
                                    </li>
                                    <li className="nav-header__link">
                                        <Link to='/about'>
                                            <div className="nav-header__link-child">О нас</div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="bot-header__account">
                                <a className="bot-header__login" href="/">Вход</a>
                                <a className="bot-header__reg" href="/">Регистрация</a>
                            </div>
                        </div>
                    </div>

                </div>
            )}
    </Sticky>
    )
}

export default BotHeader
