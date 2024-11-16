import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from  '../Assets/star_icon.png'
import start_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='display'>
        <div className="display-left">
            <div className="display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="display-img">
                <img className='display-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-start">
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="display-right-prices">
                <div className="display-right-price-old">${product.old_price}</div>
                <div className="display-right-price-new">${product.new_price}</div>
            </div>
            <div className="display-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis sit, officia doloribus enim maiores quae facere fuga laboriosam perspiciatis doloremque tempore hic totam eum nam? Autem nemo voluptatum provident.
            </div>
            <div className="display-right-size">
                <h1>Select Size</h1>
                <div className="display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XLL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='display-right-category'><span>Category :</span>Women, T-shirt,Crop Top</p>
            <p className='display-right-category'><span>Tags :</span>Morden, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay