import React, { useContext } from 'react';
import './Products.css';
import { Mycontext } from '../../../../App';

function Products({ handleAddToCart }) {
    const value = useContext(Mycontext);

    if (Array.isArray(value.productItems)) {
        return (
            <div className='Products'>
                {value.productItems.map((item) => (
                    <div className='card'>
                        <div key={item.id}>

                            <img className='product-image' src={item.image} alt={item.name} />
                        </div>
                        <div>
                        <h3 className="product-name">{item.name}</h3>
                        </div> 

                        <div className='product-price'>₹{item.price}</div>

                        <div ><button className='product-add-button' onClick={() => handleAddToCart(item)}>Add to Cart</button></div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Products;