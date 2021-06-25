import React, { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	render() {
		const { level, handleSlider } = this.props;
		return (
			<nav>
				<div className="logo">
					<a href=".">colourpicker</a>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className="slider">
						<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={handleSlider} />
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
