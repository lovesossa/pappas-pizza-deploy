import React from 'react';
import PropTypes from 'prop-types';


function PizzaBlock({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount, desc}) {
  
  
  
    const onAddPizza = () => {
      const obj = {
        id,
        name,
        imageUrl,
        price,
        sizes,
        types,
        desc,
      };
      onClickAddPizza(obj);
    };


    return (
        <div className="menu-slide__item menu-item">
            <a href="/" className="menu-item__image">
                <img src={imageUrl} alt=""/>
            </a>
            <div className="menu-item__text">
                <h3 className="menu-item__text-name">{name}</h3>
                <p className="menu-item__text-desc">{desc}</p>
            </div> 
            <div className="menu-item__choose">
                <div className="menu-item__price">от {price} ₴</div>
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