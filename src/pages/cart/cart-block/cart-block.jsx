import React from 'react';
import './cart-block.css';
import {useState} from "react";
import {useEffect} from "react";

const CartBlock = ({data, getAllProdPrice}) => {
	const [singleResPrice, setSingleResPrice] = useState(data.count * data.price);
	const [productCount, setProductCount] = useState(data.count);
	
	const incrementProductCount = () => {
		setProductCount(productCount + 1);
		getAllProdPrice('plus', data.price);
	}
	
	const decrementProductCount = () => {
		if(productCount > 1) {
			setProductCount(productCount - 1);
			getAllProdPrice('minus', data.price);
		}
	}
	
	const changeProdResultPrice = () => {
		setSingleResPrice(data.price * productCount);
	}
	
	useEffect(() => {
		changeProdResultPrice();
	}, [productCount]);
	
	return (
		<div className='cart-table-row'>
			<div className='cart-product-info-col'>
				<div className='cart-product-image'>
					<img src={data.productImage} alt='' />
				</div>
				<div className='cart-product-info'>
					<h5 className='cart-product-name'>Kugoo Kirin M4</h5>
					<ul className='cart-product-info-list'>
						{data.inStock &&
							<li className='cart-prod-info-el'><span />В наличии</li>
						}
						<li className='cart-prod-info-el'>+ 2 подарка</li>
					</ul>
				</div>
			</div>
			<div className='cart-product-count-col'>
				<div className='cart-product-calculator'>
					<button type='button' onClick={decrementProductCount} className='cart-prod-calc-action icon-minus'>minus</button>
					<input type="text" value={productCount} readOnly={true} className='cart-prod-calc-count' />
					<button type='button' onClick={incrementProductCount} className='cart-prod-calc-action icon-plus'>plus</button>
				</div>
			</div>
			<div className='cart-product-price-col'>
				<div className='cart-prod-price-col-inner'>
					{/*<div className='cart-prod-old'>*/}
					{/*	<span className='cart-prod-old-price'>39 900 ₽</span>*/}
					{/*	<span className='cart-prod-sale-percent'>-35%</span>*/}
					{/*</div>*/}
					<p className='cart-prod-price-current'>{singleResPrice} ₽</p>
				</div>
			</div>
			<div className='cart-product-delete-wrapper'>
				<button type='button' className='cart-product-delete icon-trash'>Удалить</button>
			</div>
		</div>
	);
};

export default CartBlock;