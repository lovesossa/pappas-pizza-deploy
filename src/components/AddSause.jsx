import React from 'react'

function AddSause({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount, desc}) {
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
        <div className="main-cart__addsauce-item item-addsauce">
            <div className="item-addsauce__image">
                <img src={imageUrl} alt=""/>
            </div>
            <h5 className="item-addsauce__name">{name}</h5>
            <button onClick={onAddPizza} className="choose-btn">{price} ₽
                {addedCount && <span className="choose-btn__count">{addedCount}</span>}
            </button>
        </div>
    )
}

export default AddSause;
