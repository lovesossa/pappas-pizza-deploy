import React from 'react'
import { CartItem } from '../components';
import { useDispatch, useSelector} from 'react-redux';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart'
import BotHeader from '../components/BotHeader'
import { Link } from 'react-router-dom';
import { trash } from '../components/img'
import { cartempty, cartsmile } from '../components/img'
import { fetchOffers } from '../redux/actions/offers';
import { fetchSause } from '../redux/actions/addsause';
import OfferItem from '../components/OfferItem';
import AddSause from '../components/AddSause';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

function Cart() {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
    
    const addedPizzas = Object.keys(items).map(key => {
        return items[key].items[0];
    });

    const onClearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCart());
        }
    };
    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            dispatch(removeCartItem(id));
        }
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };
    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };
    React.useEffect(() => {
        dispatch(fetchOffers());
    }, [dispatch]);
    React.useEffect(() => {
        dispatch(fetchSause());
    }, [dispatch]);

    const offersItems = useSelector(({ offers }) => offers.offersItems);
    const sauseItems = useSelector(({ addsause }) => addsause.sauseItems);
    const cartItems = useSelector(({ cart }) => cart.items);

    const handleAddPizzaToCart = obj => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });


      }
    return (
        <section className='main-cart'>
            <BotHeader />

            <div className="container">
            {totalCount ? (
                <div className="main-cart__wrapper">
                    <div className="main-cart__head">
                        <h1 className="main-cart__title">Корзина</h1>
                        <div onClick={onClearCart} className="main-cart__clear">
                            <p className="main-cart__clear-all">очистить<img src={trash} alt=""/></p>
                        </div>
                    </div>
                    <div className="main-cart__check check-items">
                        {
                            addedPizzas.map((obj) => 
                            <CartItem 
                            key={obj.id}
                            id={obj.id}
                            imageUrl={obj.imageUrl}
                            name={obj.name} 
                            types={obj.types}
                            sizes={obj.sizes}
                            desc={obj.desc} 
                            totalPrice={items[obj.id].totalPrice}
                            totalCount={items[obj.id].items.length}
                            onRemove={onRemoveItem}
                            onMinus={onMinusItem}
                            onPlus={onPlusItem}
                            />)
                        }
                    </div>
                    <div className="main-cart__offer offer-slider">
                        <h2 className="offer-slider__title">Рекомендуем к вашему заказу</h2>
                        <div className="offer-slider__items">
                            <Swiper
                                spaceBetween={5}
                                slidesPerView={3}
                                autoplay={{delay: 3500,
                                    disableOnInteraction: true,}}
                                >
                            {offersItems.map((obj) => (
                                    <SwiperSlide>
                                    <OfferItem 
                                    onClickAddPizza={handleAddPizzaToCart}
                                    key={offersItems.id} 
                                    addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                    {...obj} 
                                    />
                                    </SwiperSlide>
                                ))
                            }
                            </Swiper>
                        </div>
                    </div>
                    <div className="main-cart__addsauce">
                        <h2 className="main-cart__addsauce-title">Соусы к бортикам и закускам</h2>
                        <div className="main-cart__addsauce-items">
                        {sauseItems.map((obj) => (
                            <AddSause
                                onClickAddPizza={handleAddPizzaToCart}
                                key={sauseItems.id} 
                                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                {...obj} 
                            />
                        ))}
                        </div>
                    </div>
                    <div className="main-cart__totalprice">Сумма заказа: <span>{totalPrice} ₴</span></div>
                    <div className="main-cart__btns">
                        <button className="main-cart__btns-confirm">Оформить заказ</button>
                    </div> 
                </div>
                ) : (
                <div className="main-cart__empty">
                        <h1 className="main-cart__title">Корзина пуста<img src={cartsmile} alt=""/></h1>
                        <p className="main-cart__empty-text">Вероятнее всего, Вы ничего не выбрали. Нужно скорее исправить эту ситуацию!</p>
                        <div className="main-cart__empty-image">
                            <img src={cartempty} alt=""/>
                        </div>
                        <Link to='/'>
                            <button className="main-cart__empty-btn">Вернуться в меню</button>
                        </Link>
                </div>
                )}

            </div>
        </section>
    )
}

export default Cart;
