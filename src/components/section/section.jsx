import React from 'react';
import './section.scss';

const Section = (props) => {
	return (
		<div className='section-block'>
			<div className='wrapper'>
				<h2 className={`section-title-block align-${props.alignment}`}>{props.title}</h2>
				{props.children}
			</div>
		</div>
	);
};

export default Section;