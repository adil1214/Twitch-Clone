import React, {Component} from 'react';

class Alert extends Component {
	componentDidMount() {
		alert(this.props.error);
	}
	render() {
		return <div />;
	}
}

export default Alert;
