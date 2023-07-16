import React from 'react';
import './slide.scss';
import {Link} from "react-router-dom";
import SliderImage from './../../../../assets/images/slider-images/slider-image-1.png';
import Lightning from './../../../../assets/images/slider-images/lightning.png';

const Slide = () => {
	return (
		<div className='main-slider-slide'>
			<div className='main-slide-text-content'>
				<ul className='main-slider-tags'>
					<li className='main-slider-tag'>Новинка</li>
				</ul>
				<h2 className='slide-title'>Электросамокаты Kugoo Kirin от фициального дилера</h2>
				<div className='slide-content'>
					<p>с бесплатной доставкой по РФ от 1 дня</p>
				</div>
				<Link to='#' className='slide-link'>Перейти в католог</Link>
			</div>
			<div className='main-slide-illustration'>
				<div className='slide-illustration-wrapper'>
					<img src={SliderImage} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Slide;