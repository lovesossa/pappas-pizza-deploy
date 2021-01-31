import React from 'react';
import { yt, vk, inst, fb, appstore, googleplay } from './img'

    function Footer() {
        return (
            
            <footer className="footer" id="goto-3">
                <div className="container">
                    <div className="footer__top">
                        <div className="footer__top-links">
                        <ul className="footer__top-list">
                            <div className="footer__top-title">Pappa`s Pizza</div>
                            <li className="footer__top-link">
                            <a href="/">
                                О нас
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Pappas-книга
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Блог «Сила ума»
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Pappas ИС
                                        </a>
                            </li>
                        </ul>
                        <ul className="footer__top-list">
                            <div className="footer__top-title">Работа</div>
                            <li className="footer__top-link">
                            <a href="/">
                                В пиццерии
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                В контакт-центре
                                        </a>
                            </li>
                        </ul>
                        <ul className="footer__top-list">
                            <div className="footer__top-title">Партнерам</div>
                            <li className="footer__top-link">
                            <a href="/">
                                Франшиза
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Инвестиции
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Поставщикам
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Предложить помещение
                                        </a>
                            </li>
                        </ul>
                        <ul className="footer__top-list">
                            <div className="footer__top-title">Это интересно</div>
                            <li className="footer__top-link">
                            <a href="/">
                                Почему мы готовим без перчаток?
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Экскурсии и мастер-классы
                                        </a>
                            </li>
                            <li className="footer__top-link">
                            <a href="/">
                                Корпоративные заказы
                                        </a>
                            </li>
                        </ul>
            
                        </div>
                        <div className="footer__top-contacts">
                        <div className="footer__top-apps">
                            <a href="/" className="footer__top-app">
                                <img src={appstore} alt=""></img>
                            </a>
                            <a href="/" className="footer__top-app">
                                <img src={googleplay} alt=""></img>
                            </a>
                        </div>
                        <a className="footer__top-number" href="tel:88003020060">
                            8 800 302-00-60
                                    <span>Звонок бесплатный</span>
                        </a>
                        <a className="footer__top-email" href="/">
                            feedback@pappaspizza.com
                                </a>
                        </div>
                    </div>
                    <div className="footer__info">
                        <div className="footer__info-box info-box">
                        <div className="info-box__stat">230 277 081 ₴</div>
                        <div className="info-box__text">Выручка украинской сети в этом месяце. В прошлом — 1 975 495 246 ₴</div>
                        </div>
                        <div className="footer__info-box info-box">
                        <div className="info-box__stat">649 пиццерий</div>
                        <div className="info-box__text">в 13 странах, включая Китай, США и Великобританию</div>
                        </div>
                    </div>
                    <div className="footer__bot">
                <div className="footer__bot-copy bot-copy">
                  <div className="bot-copy__logo">Pappa`s Pizza
                            <span>© 2020</span>
                  </div>
                  <a href="/" className="bot-copy__link">Правовая информация</a>
                  <a href="/" className="bot-copy__link">Калорийность и состав</a>
                  <a href="/" className="bot-copy__link">Помощь</a>
                </div>
                <div className="footer__bot-social bot-social">
                  <a className="bot-social__item" href="/">
                    <img src={fb} alt=""/>
                  </a>
                  <a className="bot-social__item" href="/">
                    <img src={inst} alt=""/>
                  </a>
                  <a className="bot-social__item" href="/">
                    <img src={vk} alt=""/>
                  </a>
                  <a className="bot-social__item" href="/">
                    <img src={yt} alt=""/>
                  </a>
                </div>
              </div>
                </div>
                
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="js/script.min.js"></script>
            </footer>

        )
    };



export default Footer;
