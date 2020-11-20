import React from 'react';
import PropTypes from 'prop-types';

function PopularBlock({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount }) {
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
      };
      onClickAddPizza(obj);
    };


    return (
        <div className="popular__items-item popular-item">
            <div className="popular-item__inner">
                <a className="popular-item__image" href=''>
                    <img src={imageUrl} alt=""></img>
                </a>
                <div className="popular-item__text">
                    <div className="popular-item__name">{name}</div>
                    <div onClick={onAddPizza} className="popular-item__price">от {price} ₽
                    {addedCount && <span className="popular-item__price-count">{addedCount}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
PopularBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
  };
  
PopularBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
  };

export default PopularBlock;
