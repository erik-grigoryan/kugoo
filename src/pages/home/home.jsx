import React from 'react';
import './home.scss';
import Slider from "./main-slider/slider";
import YandexLogo from './../../assets/images/yandex.svg';
import Section from "../../components/section/section";
import ProductList from "../../components/product-list/product-list";

const Home = () => {
	return (
		<div className='home-page-wrapper'>
			<div className='hero-block'>
				<Slider />
				<div className='hero-footer'>
					<div className='wrapper'>
						<ul className='features-list'>
							<li className='feature'>Гарантия 1 год <span>на весь ассортимент</span></li>
							<li className='feature'>рассрочка <span>от 6 месяцев</span></li>
							<li className='feature'>Подарки <span>и бонусам к покупкам</span></li>
						</ul>
						<div className='rate-block'>
							<span className='rate-logo'>
								<img src={YandexLogo} alt="" />
							</span>
							<div className='rate-content'>
								<h6 className='rate-label'>Яндекс отзывы</h6>
								<p className='rate-num'>
									<span className='icon-star' />
									4,9
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Section
				title='электросамокаты'
				alignment='left'
			>
				<div className='section-with-filter'>
					<div className='section-filter-block'>
						<button type='button'>Хиты продаж</button>
						<button type='button'>Новинки</button>
						<button type='button'>Для взрослых</button>
						<button type='button'>Для детей</button>
					</div>
					<ProductList />
				</div>
			</Section>
		</div>
	);
};

export default Home;