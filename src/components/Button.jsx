import React from 'react';
import cart from '../images/icons/cart.svg'

class ButtonCart extends React.Component {
    render () {
        return (
            <div className="bot-header__cart cart-header">
                <a className="cart-header__link" href="/">
                    <div className="cart-header__text">{this.props.children}</div>
                    <picture>
                    <source srcSet={cart} type="image/webp"></source>
                        <img className="cart-header__image"
                            src={cart} alt="">
                            </img>
                    </picture>
                </a>
            </div>
        )
        // <button>{this.props.children}</button>
        
    }
}

// function Button (props) {
//     return 
// }



export default ButtonCart;