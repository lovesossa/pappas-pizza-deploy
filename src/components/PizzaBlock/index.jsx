import React from 'react';
import { sl1,sl2,sl3,sl4,sl5,sl6,carbonara,arriva,lanchbbq,pastacarbonara,ponchikclubnika,tomatbeef,coctailoreo,ponchikchoco,polovinki, focheese,caesar,apple,cheeseburger,ciplenok, havaii,kislosladkiy,mexico,peperoni,pesto,superbeef,vetchina, fourseasons,tomatgrenki,dodsterhot,dodsterchipotle,dodster,startermush, starterhot,starterbeef,blinchikivet,lanchchiken,cartofelbecon,cartofelciplenok,crilishki,nuggets,pastafourcheese,pastaciplenokgribi,pastaboloniese,oladyi,salatgreek,salatcaesar, dCaesar,dSweet,dGamer,dHokey,dCarbonara,dMovie,dBirthday,dCola,dCola3 } from '../img'
import PropTypes from 'prop-types';


function PizzaBlock({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount, desc}) {
    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];
  
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(0);
  
    const onSelectType = (index) => {
      setActiveType(index);
    };
  
    const onSelectSize = (index) => {
      setActiveSize(index);
    };
  
    const onAddPizza = () => {
      const obj = {
        id,
        name,
        imageUrl,
        price,
        size: availableSizes[activeSize],
        type: availableTypes[activeType],
        sizes,
        types,
        desc,
      };
      onClickAddPizza(obj);
    };


    return (
        <div className="menu-slide__item menu-item">
            <a href="" className="menu-item__image">
                <img src={imageUrl} alt=""/>
            </a>
            <div className="menu-item__text">
                <h3 className="menu-item__text-name">{name}</h3>
                <p className="menu-item__text-desc">{desc}</p>
            </div> 
            <div className="menu-item__choose">
                <div className="menu-item__price">от {price} ₽</div>
                <button onClick={onAddPizza} className="choose-btn">Выбрать 
                {addedCount && <span className="choose-btn__count">{addedCount}</span>}
                </button>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
  };
  
  PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
  };

export default PizzaBlock;