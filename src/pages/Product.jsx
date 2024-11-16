import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}= useParams();
  const Product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={Product}/>
      <ProductDisplay product={Product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product