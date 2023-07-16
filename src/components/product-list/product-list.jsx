import React from 'react';
import './product-list.scss';
import products from './../../data/products.json';
import ProductCard from "../product-card/product-card";

const ProductList = () => {
	return (
		<div className='product-grid col-count-4'>
			{products.map(product =>
				<ProductCard kay={product.id} productData={product} />
			)}
		</div>
	);
};

export default ProductList;