import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import { Select, IconButton, Snackbar, MenuItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format : 'hex',
			open   : false
		};
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleFormatChange(evt) {
		this.setState({ format: evt.target.value, open: true });
		this.props.handleChange(evt.target.value);
	}

	closeSnackbar() {
		this.setState({ open: false });
	}

	render() {
		const { level, handleSlider } = this.props;
		const { format, open } = this.state;
		return (
			<nav>
				<div className="logo">
					<Link to="/">colourpicker</Link>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className="slider">
						<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={handleSlider} />
					</div>
				</div>
				<div className="select-container">
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgb(255, 255, 255, 0.5)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={open}
					autoHideDuration={3000}
					message={<span id="message-id">Format Changed!</span>}
					ContentProps={{ 'aria-describedby': 'message-id' }}
					onClose={this.closeSnackbar}
					action={[
						<IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}

export default Navbar;
