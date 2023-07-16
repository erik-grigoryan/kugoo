import React, {useState} from 'react';
import productsInCart from './../../data/products_in_cart.json';
import './cart.css';
import CartBlock from "./cart-block/cart-block";

const Cart = () => {
	const products = [...productsInCart];
	
	let allProductsPrices = 0;
	
	for(let i = 0; i < products.length; i++) {
		allProductsPrices+=products[i].price * products[i].count;
	}
	
	const [allProdsPrice, setAllProdsPrice] = useState(allProductsPrices);
	
	const getAllProdPrice = (action, price) => {
		if(action === 'plus') {
			setAllProdsPrice(allProdsPrice + price);
		} else if(action === 'minus') {
			setAllProdsPrice(allProdsPrice - price);
		}
	}
	
	return (
		<div className='cart-page-wrapper'>
			<div className='wrapper'>
				<div className='cart-block-header'>
					<h1 className='cart-page-title'>Моя корзина</h1>
					<p className='product-in-cart-count'>2 товара</p>
				</div>
				<div className='cart-block-grid'>
					<div className='cart-block-table'>
						<div className='cart-table-head'>
							<p className='cart-table-heading'>Товар</p>
							<p className='cart-table-heading'>Количество</p>
							<p className='cart-table-heading'>Сумма</p>
							<button type='button' className='remove-all-products'>Удалить все</button>
						</div>
						<div className='cart-table-body'>
							{products.map((productInCart) =>
								<CartBlock
									key={productInCart.id}
									data={productInCart}
									getAllProdPrice={getAllProdPrice}
								/>
							)}
						</div>
					</div>
					<div className='cart-block-checkout'>
						<div className='cart-block-checkout-block'>
							<span className='cart-block-checkout-label'>Итого</span>
							<p className='cart-block-checkout-result'>58 800 ₽</p>
							<div className='cart-block-checkout-list'>
								<div className='cart-block-checkout-list-row'>
									<div className='cart-block-checkout-title'>Стоимость товаров</div>
									<div className='cart-block-checkout-value'>{allProdsPrice} ₽</div>
								</div>
								<div className='cart-block-checkout-list-row'>
									<div className='cart-block-checkout-title'>Сумма скидки</div>
									<div className='cart-block-checkout-value'>8 000 ₽</div>
								</div>
								<div className='cart-block-checkout-list-row'>
									<div className='cart-block-checkout-title'>Итого без учета доставки</div>
									<div className='cart-block-checkout-value'>50 800 ₽</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;