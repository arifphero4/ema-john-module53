import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);


    }

    return (
        <div className="shop-container">
            {/* <h1> Found items: {products.length}</h1>
            <h3> cart items: {cart.length}</h3>
            <h2>This is Order Review</h2>
            <Cart cart={cart}></Cart> */}
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key ={product.key}
                        product={product} 
                        handleRemove = {handleRemove}
                    ></ReviewItem>)
                }

            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;