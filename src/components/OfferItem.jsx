import React from 'react'



function OfferItem({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount, desc}) {
    const onAddPizza = () => {
        const obj = {
          id,
          name,
          imageUrl,
          price,
        //   size: availableSizes[activeSize],
        //   type: availableTypes[activeType],
          sizes,
          types,
          desc,
        };
        onClickAddPizza(obj);
      };
    return (
        <div className="offer-slider__item">
            <div className="offer-slider__item-image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="offer-slider__item-inner">
                <h5 className="offer-slider__item-name">{name}</h5>
                <button onClick={onAddPizza} className="choose-btn">{price} ₴
                {addedCount && <span className="choose-btn__count">{addedCount}</span>}
                </button>
            </div>
        </div>
    )
}

export default OfferItem;
