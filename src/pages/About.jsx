import React from 'react'
import {comix11,comix12,comix13,comix21,comix22,comix23,comix31,comix32,comix33, clean, stat} from '../components/img.js'
import { useSelector, useDispatch } from 'react-redux';
import BotHeader from '../components/BotHeader'




function About() {
    function onRefresh () {
        alert("СБУ запретила использование этой кнопки :(");
      };
    return (
        <div className="wrapper">

                <div className="page__about-us about-us">
                    <BotHeader />

                    <div className="container">
                        <div className="about-us__inner">
                            <h1 className="about-us__title">Мы</h1>
                            <div className="about-us__box">
                                <p className="about-us__text">
                                    Обычно люди приходят в Pappas Pizza, чтобы просто поесть. Наши промоутеры раздают
                                    листовки про кусочек пиццы за двадцать рублей или ещё что-то выгодное. Мы делаем это как
                                    первый шаг, чтобы познакомиться.
                                </p>
                                <p className="about-us__text">Но для нас Pappas — не только пицца. Это и пицца тоже, но в первую
                                    очередь это большое
                                    дело, которое вдохновляет нас, заставляет каждое утро просыпаться и с интересом
                                    продолжать работу.
                                </p>
                                <p className="about-us__text">
                                    В чём же наш интерес? Сейчас расскажем.
                                </p>
                                <div className="about-us__comix anim-items">
                                    <img src={comix11} alt="" className="comix-1-1" />
                                    <img src={comix12} alt="" className="comix-1-2" />
                                    <img src={comix13} alt="" className="comix-1-3" />
                                </div>
                            </div>
                            <div className="about-us__box">
                                <h3 className="about-us__subtitle">Идеальные ингредиенты</h3>
                                <p className="about-us__text">
                                    Почему мы так хотим познакомиться? Потому что дальше пицца делает всё сама. Люди видят,
                                    что она вкусная, и возвращаются снова. Нам главное первый раз это показать.
                                </p>
                                <p className="about-us__text">
                                    Вообще пицца — очень простая штука, её сложно испортить. Достаточно хороших ингредиентов
                                    и правильного теста. Это конструктор, если детали качественные, то и результат будет в
                                    порядке. Вот они, наши детали:
                                </p>
                                <div className="about-us__parts">
                                    <div className="about-us__part">
                                        <div className="about-us__part-name">Тесто</div>
                                        <div className="about-us__part-desc">Самая тонкая вещь. Главное сделать его "живым". Это
                                            целый квест из граммов, градусов, процентов и часов с минутами. Процесс
                                            непростой, но у нас получается!
                                        </div>
                                    </div>
                                    <div className="about-us__part">
                                        <div className="about-us__part-name">Моцарелла</div>
                                        <div className="about-us__part-desc">Сыр в пицце - ключевой ингридиент. Мы используем
                                            настоящую моцареллу от российских поставщиков. Сыр должен тянуться как на
                                            картинке.</div>
                                    </div>
                                    <div className="about-us__part">
                                        <div className="about-us__part-name">Начинка</div>
                                        <div className="about-us__part-desc">Есть два главных правила вкусной начинки: не
                                            экономить на начинке; фанатично соблюдать режим хранения. Это и весь секрет.
                                        </div>
                                    </div>
                                    <div className="about-us__part">
                                        <div className="about-us__part-name">Томатный соус</div>
                                        <div className="about-us__part-desc">Главное что нужно знать про хороший томатный соус:
                                            он должен быть сделан из томатов. Звучит логично, но задумайтесь!</div>
                                    </div>
                                </div>
                                <div className="about-us__comix anim-items">
                                    <img src={comix21} alt="" className="comix-2-1" />
                                    <img src={comix22} alt="" className="comix-2-2" />
                                    <img src={comix23} alt="" className="comix-2-3" />
                                </div>

                            </div>
                            <div className="about-us__box">
                                <h3 className="about-us__subtitle">Одинаково вкусно в Москве и Киеве</h3>
                                <p className="about-us__text">
                                    Кто угодно может сделать вкусную пиццу. А шеф-повар итальянского ресторана сделает и
                                    вовсе шедевр. Он молодец. Но представьте, что вам нужно сделать вкусную пиццу в сотнях
                                    пиццерий, за сотни километров друг от друга. Это наш случай, у нас их вон уже сколько:
                                </p>
                                <div className="about-us__image">
                                    <img src={stat} alt="" />
                                </div>
                                <p className="about-us__text">
                                    Пицца должна быть вкусной и везде одинаковой. Пиццерии должны быть одинаково уютными,
                                    кассиры неизменно приветливыми, а курьеры — расторопными.
                                </p>
                                <p className="about-us__text">
                                    И это как раз сложно. Но мы умеем!
                                </p>
                            </div>
                            <div className="about-us__box">
                                <h3 className="about-us__subtitle">Заморочились на цифрах</h3>
                                <p className="about-us__text">
                                    Позвольте представить вам Додо ИС. Это наша информационная система. Мы сами придумали
                                    её, запрограммировали и продолжаем улучшать каждый день. Додо ИС знает всё. Например,
                                    как дела прямо сейчас?
                                </p>
                                <div className="about-us__block">
                                    <div className="about-us__row">
                                        <div className="about-us__row-content">
                                            <div className="about-us__row-text">
                                                У нас
                                            </div>
                                            <span>652</span>
                                            <div className="about-us__row-text">
                                                пиццерий
                                            </div>
                                        </div>
                                        <div className="about-us__row-content">
                                            <div className="about-us__row-text">
                                                В октябре выручка российской сети составила
                                            </div>
                                            <span>410 441 882</span>
                                            <div className="about-us__row-text">
                                                рублей
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-us__row">
                                        <div className="about-us__row-link">Но эта информация уже устарела →</div>
                                        <button onClick={onRefresh} className="about-us__row-btn mix-btn">Обновить</button>
                                    </div>
                                </div>
                                <p className="about-us__text">
                                    Pappas Pizza ИС отвечает за: онлайн-заказ через сайт или мобильное приложение; работу
                                    кассы и
                                    приём платежей; очередь заказов у пиццамейкеров; координацию курьеров; управление
                                    поставками; анализ продаж; ещё за десяток вещей, о которых нормальные люди не могут
                                    одновременно помнить, а она может, потому что она — не человек.
                                </p>
                                <p className="about-us__text">Поверьте, без Додо ИС ничего бы не получилось.</p>

                            </div>
                            <div className="about-us__box">
                                <h3 className="about-us__subtitle">Единые стандарты</h3>
                                <p className="about-us__text">
                                    Цифровые технологии помогают нам вовремя замечать, если что-то идёт неправильно. Но как
                                    понять, что правильно, а что нет? Для этого у нас есть стандарты. Вот, например, про
                                    мытьё рук:
                                </p>
                                <div className="about-us__image">
                                    <img src={clean} alt="" />
                                </div>
                                <p className="about-us__text">
                                    Наши стандарты — это не какие-то заумные схемы и формулы, а супер-понятные правила. У
                                    нас их сотни, буквально про всё. Именно так мы умудряемся делать всё хорошо и
                                    одновременно быстро расти.
                                </p>
                                <div className="about-us__comix anim-items">
                                    <img src={comix31} alt="" className="comix-3-1" />
                                    <img src={comix32} alt="" className="comix-3-2" />
                                    <img src={comix33} alt="" className="comix-3-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default About;

