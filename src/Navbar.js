import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format : 'hex'
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({ format: evt.target.value });
		this.props.handleChange(evt.target.value);
	}

	render() {
		const { level, handleSlider } = this.props;
		const { format } = this.state;
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
				<div className="select-container">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgb(255, 255, 255, 0.5)</MenuItem>
					</Select>
				</div>
			</nav>
		);
	}
}

export default Navbar;
