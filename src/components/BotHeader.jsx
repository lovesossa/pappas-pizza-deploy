import React from 'react'
import { Sticky } from 'react-sticky';
import { Link } from 'react-router-dom';
import ButtonCart from './Button';
import { useSelector, useDispatch } from 'react-redux';


function BotHeader() {
    
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <Sticky>
            {({style, }) => (
                <div style={style} className='head-wrapper'>
                    <div className="header__bot container bot-header">
                        <Link to='/cart'>
                            <ButtonCart>{totalPrice ? totalPrice + ' ₽' : 'Корзина'}</ButtonCart>
                        </Link>
                        <nav className="bot-header__nav nav-header _anim-nav" >
                            <ul className="nav-header__list">
                                <li className="nav-header__link">
                                    <Link to='/'>
                                        <a href="#head9">Меню</a>
                                    </Link>
                                </li>
                                <li className="nav-header__link">
                                    <Link to='/'>
                                        <a href="#head1">Акции</a>
                                    </Link>
                                </li>
                                <li className="nav-header__link">
                                    <Link to='/'>
                                        <a href="#head2">Доставка</a>
                                    </Link>
                                </li>
                                <li className="nav-header__link">
                                    <Link to='/about'>
                                        <div>О нас</div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="bot-header__account">
                            <a className="bot-header__login" href="">Вход</a>
                            <a className="bot-header__reg" href="">Регистрация</a>
                        </div>
                    </div>
                </div>
            )}
    </Sticky>
    )
}

export default BotHeader
