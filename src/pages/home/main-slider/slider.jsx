import React from 'react';
import './slider.scss';
import Slide from "./single-slide/slide";

const Slider = () => {
	return (
		<div className='main-slider'>
			<div className='main-slider-inner'>
				<div className='wrapper'>
					<div className='slides-group'>
						<Slide />
					</div>
					<div className='slider-navigation'></div>
				</div>
			</div>
		</div>
	);
};

export default Slider;