import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { FetchFailure, FetchRequest, FetchSuccess } from '../../actions/Fetch';
import Loader from '../presentationals/Loader';
import StreamCard from '../presentationals/StreamCard';
import Alert from '../presentationals/Alert';

class Streams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			streamCardItems: []
		};
	}

	componentWillMount() {
		this.apiRequest();
		this.props.dispatch(FetchRequest());
	}

	componentDidUpdate() {
		console.log('hey, component updated!');
	}

	apiRequest() {
		axios
			.get('https://api.twitch.tv/kraken/streams/featured', {
				headers: {
					Accept: 'application/vnd.twitchtv.v5+json',
					'Client-ID': '5oi8aqqszxnpa5w2oxn99zsyby1ld2 '
				}
			})
			.then((res) => {
				this.props.dispatch(FetchSuccess(res.data.featured));
			})
			.catch((e) => {
				this.props.dispatch(FetchFailure(e));
			});
	}

	render() {
		const stateProps = this.props.state;
		const status = stateProps.status;
		const error = stateProps.error;
		const streamCardItems = this.props.state.streams.map((str) => {
			// get this into the component state later
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

const mapStateToProps = (state) => {
	return { state };
};

export default connect(mapStateToProps)(Streams);
