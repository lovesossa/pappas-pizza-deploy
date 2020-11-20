import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, LoadingProd  } from '../components';
import PizzaBlock from '../components/PizzaBlock/index';
import PopularBlock from '../components/PopularBlock';
import BotHeader from '../components/BotHeader'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas';
import { fetchSnacks } from '../redux/actions/snacks';
import { fetchDeserts } from '../redux/actions/deserts';
import { fetchDrinks } from '../redux/actions/drinks';
import { fetchPopularOne, fetchPopularTwo } from '../redux/actions/popular';

import { sl1,sl2,sl3,sl4,sl5,sl6,dCaesar,dSweet,dGamer,dHokey,dCarbonara,dMovie,dBirthday,dCola,dCola3 } from '../components/img'


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const categoryNames = [ "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые" ];
const sortItems = [
    {name: "популярности", type: "rating", order: 'desc'},
    {name: "цене", type: "price", order: 'asc'},
    {name: "алфавиту", type: "name", order: 'asc'}
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const snackItems = useSelector(({ snacks }) => snacks.snackItems);
  const desertItems = useSelector(({ deserts }) => deserts.desertItems);
  const drinkItems = useSelector(({ drinks }) => drinks.drinkItems);
  const popItemsOne = useSelector(({ popularone }) => popularone.popItemsOne);
  const popItemsTwo = useSelector(({ populartwo }) => populartwo.popItemsTwo);

  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  

// скролл по якорю
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
animationTime = 1200,
framesCount = 900;

anchors.forEach(function(item) {
item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function() {
    let scrollBy = coordY / framesCount;

    if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
    window.scrollBy(0, scrollBy);
    } else {
    window.scrollTo(0, coordY);
    clearInterval(scroller);
    }
    }, animationTime / framesCount);
    });
});
// Анимация навигации
const animItemsDisc = document.querySelectorAll('._anim-disc');
if (animItemsDisc.length > 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll(params) {
        for (let index = 0; index < animItemsDisc.length; index++) {
            const animItemDisc = animItemsDisc[index];
            const animNavDisc = document.querySelector('._anim-nav');

            const animItemHeight = animItemDisc.offsetHeight;
            const animItemOffset = offset(animItemDisc).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if ( animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if (( window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < ( animItemOffset + animItemHeight / 1.475 )){
                animNavDisc.classList.add('_active');
            }else{
                animNavDisc.classList.remove('_active');
            }
        }
    };
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    };
};

const animItemsDeliv = document.querySelectorAll('._anim-deliv');
if (animItemsDeliv.length > 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll(params) {
        for (let index = 0; index < animItemsDeliv.length; index++) {
            const animItemDeliv = animItemsDeliv[index];
            const animNavDeliv = document.querySelector('._anim-nav');

            const animItemHeight = animItemDeliv.offsetHeight;
            const animItemOffset = offset(animItemDeliv).top;
            const animStart = 1;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if ( animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if (( window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < ( animItemOffset + animItemHeight  )){
                animNavDeliv.classList.add('_noactive');
            }else{
                animNavDeliv.classList.remove('_noactive');
            }
        }
    };
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    };
};
/////////////////////


  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  React.useEffect(() => {
    dispatch(fetchSnacks(sortBy, category));
  }, [category, sortBy]);

  React.useEffect(() => {
    dispatch(fetchDeserts(sortBy, category));
  }, [category, sortBy]);

  React.useEffect(() => {
    dispatch(fetchDrinks(sortBy, category));
  }, [category, sortBy]);

  React.useEffect(() => {
    dispatch(fetchPopularOne(sortBy, category));
  }, [category, sortBy]);

  React.useEffect(() => {
    dispatch(fetchPopularTwo(sortBy, category));
  }, [category, sortBy]);


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]); 

  const handleAddPizzaToCart = obj => {
    dispatch({
        type: 'ADD_PIZZA_CART',
        payload: obj,
    });
  }

    return (
        <main className="page">
            <BotHeader />
                
            <div className="page__mainslider mainslider">
                <Swiper
                spaceBetween={100}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true, }}
                autoplay={{delay: 3500,
                    disableOnInteraction: false,}}
                >
                <SwiperSlide>
                <div className="mainslider__slide">
                    <img src={sl1} alt=""></img>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="mainslider__slide">
                    <img src={sl2} alt=""></img>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="mainslider__slide">
                    <img src={sl3} alt=""></img>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="mainslider__slide">
                <img src={sl4} alt=""></img>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="mainslider__slide">
                <img src={sl5} alt=""></img>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="mainslider__slide">
                    <img src={sl6} alt=""></img>
                </div>
                </SwiperSlide>
                </Swiper>

            </div>
            <div className="page__popular container popular" id="head9">
                <h2 className="popular__title">Популярное</h2>
                <div className="popular__inner">
                <div className="popular__slider">
                    <Swiper
                    spaceBetween={1000}
                    slidesPerView={1}
                    autoplay={{delay: 3500,
                        disableOnInteraction: true,}}
                    >

                    <SwiperSlide>
                        <div className="popular__items">
                            {popItemsOne.map((obj) => (
                                    <PopularBlock 
                                    onClickAddPizza={handleAddPizzaToCart}
                                    key={popItemsOne.id} 
                                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                    {...obj} 
                                    />
                                ))
                            }
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="popular__items">
                        {popItemsTwo.map((obj) => (
                                    <PopularBlock 
                                    onClickAddPizza={handleAddPizzaToCart}
                                    key={popItemsTwo.id} 
                                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                    {...obj} 
                                    />
                                ))
                            }
                        </div>
                    </SwiperSlide>

                    </Swiper>
                </div>
                </div>
            </div>
            <div className="page__menu menu">
                <div className="container">
                <div className="menu-slider__nav menu-nav ">
                    <span className="menu-nav__item active ">Пицца</span>
                    <span className="menu-nav__item">Закуски</span>
                    <span className="menu-nav__item">Десерты</span>
                    <span className="menu-nav__item">Напитки</span>
                </div>
                <div className="menu-slider">
                    <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    allowTouchMove={false}
                    effect="fade"
                    pagination={{ 
                        clickable: true,
                        el: '.menu-nav',
                        bulletClass: 'menu-nav__item',
                        bulletActiveClass: 'active',
                        renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    }}
                    autoHeight="true"
                    >
                    <SwiperSlide>
                    <div className="menu-slide menu--pizza">
                        <div className="menu--pizza__cat">

                        <Categories
                            activeCategory={category}
                            onClickCategory={onSelectCategory}
                            items={categoryNames}
                        />
                        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />

                        </div>
                            {isLoaded 
                                ? items.map((obj) => (
                                    <PizzaBlock 
                                        onClickAddPizza={handleAddPizzaToCart}
                                        key={items.id}
                                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                        {...obj} 
                                    />
                                ))
                            : Array(10)
                                .fill(0)
                                .map((_, index) => <LoadingProd key={index} />)
                            }
                    </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="menu-slide menu--snacks">
                        {isLoaded 
                                ? snackItems.map((obj) => (
                                    <PizzaBlock 
                                        onClickAddPizza={handleAddPizzaToCart}
                                        key={snackItems.id} 
                                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                        {...obj} 
                                    />
                                ))
                            : Array(10)
                                .fill(0)
                                .map((_, index) => <LoadingProd key={index} />)
                        }
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="menu-slide menu--desserts">
                        {isLoaded 
                            ? desertItems.map((obj) => (
                                <PizzaBlock 
                                    onClickAddPizza={handleAddPizzaToCart}
                                    key={desertItems.id} 
                                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                    {...obj} 
                                />
                            ))
                        : Array(10)
                            .fill(0)
                            .map((_, index) => <LoadingProd key={index} />)
                        }
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="menu-slide menu--drinks ">
                        {isLoaded 
                            ? drinkItems.map((obj) => (
                                <PizzaBlock 
                                    onClickAddPizza={handleAddPizzaToCart}
                                    key={drinkItems.id} 
                                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                    {...obj} 
                                />
                            ))
                        : Array(10)
                            .fill(0)
                            .map((_, index) => <LoadingProd key={index} />)
                        }
                    </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
                </div>
            </div>
            <div className="page__discount discount _anim-disc" id="head1">
                <div className="container">
                <div className="discount-title">Акции доставки и самовывоза</div>
                <div className="discount-inner">
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                        <img src={dCaesar} alt=""></img>
                    </div>
                    <div className="discount-box__title">Пицца со свежими листьями салата</div>
                    <div className="discount-box__content">
                        <div className="discount-box__text">К новой пицце «Цезарь» мы привезем конвертик со свежими
                        листьями салата айсберг. Добавьте их в горячую пиццу с нежным цыплёнком, томатами
                        черри,
                        сырами чеддер и пармезан, моцареллой, сливочным соусом и соусом цезарь. Завершите
                                        шедевр!</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>

                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                    <img src={dSweet} alt=""></img>
                    </div>
                    <div className="discount-box__title">Сладкие новинки</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">Попробуйте пиццу «Запеченное яблоко» и сладкие рулетики
                        с
                        нежным соусом пломбир, кусочками яблока, ягодами черной смородины, корицей и
                        лепестками
                                        миндаля.</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                        <img src={dGamer} alt=""></img>
                    </div>
                    <div className="discount-box__title">Розыгрыш геймерских призов от MSI</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">Закажите «Кибер-комбо» до 21 октября и автоматически
                        станете
                        участником розыгрыша игрового компьютера, ноутбука, видеокарты, монитора,
                        материнской
                        платы, набора из мыши и клавиатуры, 20 лутбоксов, 20 гарнитур, а также 10 промокодов
                        на
                                        5 больших пицц. Итоги подведем 22 октября 2020 на https://vk.com/msi_russia.</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                        <img src={dHokey} alt=""></img>
                    </div>
                    <div className="discount-box__title">Комбо для хоккейных болельщиков</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">Выберите пиццу 35 см, закуску и напиток по выгодной
                        цене.
                        Комбо «Шайбу!» — то, что нужно для захватывающего матча с любимой командой СКА. При
                                        заказе комбо акции не действуют.</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                        <img src={dCarbonara} alt=""></img>
                    </div>
                    <div className="discount-box__title">Паста Карбонара</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">Паста с сочным беконом, сырами чеддер, пармезан и
                        моцарелла,
                                        томатами, соусом альфредо, итальянскими травами и чесноком. Попробуйте!</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                        <img src={dMovie} alt=""></img>
                    </div>
                    <div className="discount-box__title">Розыгрыш билетов на мультфильм «Семейка Бигфутов»</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">Разыгрываем 1000 сертификатов по 450 ₽ на кино-премьеру
                        «Семейка Бигфутов». Для участия соберите корзину на 1099 ₽ и введите промокод KINO.
                        Проведем розыгрыш два раза: 28 сентября и 7 октября, результаты опубликуем в группе
                        Вконтакте «Додо Пицца Россия», победителям пришлем смс с промокодом на покупку
                        билетов.
                        Акция действует до 7 октября, только 1 раз. Акция не действует с другими акциями по
                                        промокоду.</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                    <img src={dBirthday} alt=""></img>
                    </div>
                    <div className="discount-box__title">День рождения!</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">D126 — промокод на пиццу «Запеченное яблоко» 25 см для
                        именинника. Подарок ждет вас за три дня до дня рождения, в день рождения и десять
                        дней
                        после — хоть каждый день! Перед заказом укажите дату рождения в личном кабинете и
                        набирите товары на минимальную сумму доставки. Акция не действует с Додо-комбо и при
                                        добавлении ингредиентов..</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                        <img src={dCola} alt=""></img>
                    </div>
                    <div className="discount-box__title">Две бутылочки Coca-Cola по суперцене</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">Добавьте в корзину две любые бутылочки Coca-Cola — и их
                        цена
                        снизится. Акция действует при заказе на доставку и самовывоз. Не действует с комбо и
                        при
                                        добавлении дополнительных ингредиентов.</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>
                    <div className="discount-inner__box discount-box">
                    <div className="discount-box__image">
                        <img src={dCola3} alt=""></img>
                    </div>
                    <div className="discount-box__title">Три бутылочки Coca-Cola по суперцене</div>
                    <div className="discount-box__content">

                        <div className="discount-box__text">Добавьте в корзину три любые бутылочки Coca-Cola — и их
                        цена
                        снизится.Акция действует при заказе на доставку и самовывоз. Не действует с комбо и
                        при
                                        добавлении дополнительных ингредиентов.</div>
                        <button className="discount-box__link">Посмотреть</button>
                    </div>
                    </div>


                </div>
                </div>
            </div>
            <div className="page__delivery-pay pay-delivery _anim-deliv" id='head2'>
                <div className="container">
                <div className="pay-delivery__title">Доставка и оплата</div>
                <div className="pay-delivery__inner">
                    <div className="pay-delivery__block">
                    <div className="pay-delivery__block-title">60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</div>
                    <div className="pay-delivery__block-text">Если мы не успеем доставить продукты в течение 60
                    минут, кроме соусов и продуктов из раздела «Другие товары», курьер подарит вам
                                    сертификат или промокод на большую пиццу 35 см на традиционном тесте.</div>
                    </div>
                    <div className="pay-delivery__block">
                    <div className="pay-delivery__block-title">PAPPA`S PIZZA — СЕТЬ ПИЦЦЕРИЙ № 1 В УКРАИНЕ</div>
                    <div className="pay-delivery__block-text">по доставке пиццы по данным из отчета Euromonitor
                                    International на май 2017 года. <span>Все цены в меню указаны без учета скидок.</span>
                    </div>
                    </div>
                    <div className="pay-delivery__block">
                    <div className="pay-delivery__row">
                        <div className="pay-delivery__block-title">495 ₽</div>
                        <div className="pay-delivery__block-text">Минимальная сумма доставки без учета товаров из
                                        категории «Другие товары»</div>
                    </div>
                    <div className="pay-delivery__row">
                        <div className="pay-delivery__block-title">7 000 ₽</div>
                        <div className="pay-delivery__block-text">
                        Максимальная сумма при оплате наличными
                                        <span>Изображения продуктов могут отличаться от продуктов в заказе.</span>
                        </div>
                    </div>
                    </div>
                    <div className="pay-delivery__block">
                    <div className="pay-delivery__block-title">ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</div>
                    <div className="pay-delivery__block-map">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167208.88725982627!2d33.299104301487056!3d49.093502579505056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d753ab9b0218df%3A0x49204e009e9c5b1c!2z0JrRgNC10LzQtdC90YfRg9C6LCDQn9C-0LvRgtCw0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMzk2MDA!5e0!3m2!1suk!2sua!4v1601819010277!5m2!1suk!2sua"
                        title="pizza-frame" width="256" height="256" frameBorder="0" style={{border: 'none'}} allowFullScreen=""
                        aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    </div>


                </div>

                </div>

            </div>
        </main>
    )
}

export default Home;
