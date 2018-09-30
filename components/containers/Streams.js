import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../presentationals/Loader';
import StreamCard from '../presentationals/StreamCard';
import Alert from '../presentationals/Alert';
import RequestApi from '../../actions/RequestApi';

class Streams extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	streamCardItems: []
		// };
	}

	componentWillMount() {
		this.props.dispatch(RequestApi());
	}

	componentDidUpdate() {
		console.log('hey, component updated!');
	}

	render() {
		const stateProps = this.props.state;
		const status = stateProps.status;
		const error = stateProps.error;
		const streamCardItems = this.props.state.streams.map((str) => {
			return (
				<StreamCard
					key={str.stream._id}
					streamCover={str.stream.preview.medium}
					streamLink={str.stream.channel.url}
					streamer={str.stream.channel.display_name}
					streamTitle={str.stream.channel.status}
					streamViewers={str.stream.viewers}
				/>
			);
		});

		// i dont like this conditional rendering... maybe use hoc later?
		return (
			<div>
				{status === 'loading' ? (
					<Loader />
				) : status === 'success' ? (
					<div className="stream-cards">{streamCardItems}</div>
				) : status === 'error' ? (
					<div>
						<Alert error={error} />
					</div>
				) : (
					<div />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {		//  im exposing the whole state to Streams component.
	return { state };
};

export default connect(mapStateToProps)(Streams);
