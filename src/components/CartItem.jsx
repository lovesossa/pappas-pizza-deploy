import React from 'react'
import classNames from 'classnames'
import PropTypes, { func } from 'prop-types';
import { plusicon, minusicon, clearicon} from './img'



function CartItem({ id, type, size, imageUrl, name, types, sizes, totalPrice, totalCount, onRemove, onPlus, onMinus, desc }) {
    const handleRemoveClick = () => {
        onRemove(id);
    };
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

    const handlePlusItem = () => {
        onPlus(id);
    };
    const handleMinusItem = () => {
        onMinus(id);
    };

    return (
        <div className="check-item">
            <div className="check-item__image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="check-item__inner">
                <h3 className="check-item__title">
                        {name}
                        <span className="check-item__title-desc"></span>
                </h3>
                <div className="check-item__info">
                        <div className="check-item__info-bar">
                            <ul>
                                {availableTypes.map((type, index) => (
                                    types.includes(index) &&
                                        <li
                                        key={type}
                                        onClick={() => onSelectType(index)}
                                        className={classNames({
                                            active: activeType === index,
                                            disabled: !types.includes(index),
                                        })}>
                                        {type}
                                        </li>
                                ))}
                            </ul>
                        </div>
                        <div className="check-item__info-bar">
                            <ul>
                                {availableSizes.map((size, index) => (
                                    sizes.includes(size) &&
                                    <li
                                    key={size}
                                    onClick={() => onSelectSize(index)}
                                    className={classNames({
                                        active: activeSize === index,
                                        disabled: !sizes.includes(size),
                                    })}>
                                    {size} см.
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                </div>
                <div className="check-item__box">
                        <div className="check-item__quantity">
                            <button onClick={handleMinusItem}><img src={minusicon} alt="" /></button>
                            <span>{totalCount}</span>
                            <button onClick={handlePlusItem}><img src={plusicon} alt="" /></button>
                        </div>
                        <div className="check-item__prodprice"><span>{totalPrice} ₽</span></div>
                        <button className="check-item__clear" onClick={handleRemoveClick}><img src={clearicon} alt="" /></button>
                </div>

            </div>

    </div>
    )
}



CartItem.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
};

CartItem.defaultProps = {
    name: 'ебал0',
    price: '0',
    imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
    sizes: [],
    types: [],
};


export default CartItem;