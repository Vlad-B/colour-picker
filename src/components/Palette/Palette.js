import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox';

import './Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.handleSlider = this.handleSlider.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	handleSlider(newLevel) {
		this.setState({ level: newLevel });
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { colors, paletteName, emoji } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox background={color[format]} name={color.name} key={color.id} />
		));
		return (
			<div className="Palette">
				<Navbar level={level} handleSlider={this.handleSlider} handleChange={this.changeFormat} />
				<div className="Palette-colors">{colorBoxes}</div>
				<footer className="Palette-footer">
					{paletteName}
					<span className="emoji">{emoji}</span>
				</footer>
			</div>
		);
	}
}

export default Palette;
