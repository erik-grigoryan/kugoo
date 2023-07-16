import React from 'react';
import './product-card.scss';
import {Link} from "react-router-dom";

const ProductCard = ({productData}) => {
	return (
		<div className='product-card'>
			<div className='product-card-header'>
				<div className='product-card-top'>
					<ul className='product-card-tags'>
						{productData.status.map(statusType =>
							<li className='product-card-tag' data-type={statusType}>{statusType === 'hit' ? 'ХИТ' : statusType === 'new' ? 'Новинка' : ''}</li>
						)}
					</ul>
					<button type='button' className='product-compare icon-scales' />
				</div>
				<img src={productData.product_thumbnail} className='product-image' alt='' />
			</div>
			<div className='product-card-body'>
				<h3 className='product-card-name'>
					<Link to=''>{productData.product_name}</Link>
				</h3>
				<ul className='product-card-features'>
					{Object.keys(productData.features).map(key => {
						return (
							<li key={key} className='product-card-feature'>
								<i className={`icon-${key}`} />
								<span className='product-card-feature-label'>{productData.features[key]}</span>
							</li>
						);
					})}
				</ul>
				<div className='product-card-data-action'>
					<div className='product-card-price-block'>
						<p className='product-card-old-price'>{productData.product_old_price} {productData.product_price_cur}</p>
						<p className='product-card-current-price'>{productData.product_price} {productData.product_price_cur}</p>
					</div>
					<div className='product-card-action-block'>
						<button type='button' className='icon-cart' />
						<button type='button' className='icon-heart' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;