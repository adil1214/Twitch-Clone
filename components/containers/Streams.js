import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { FetchFailure, FetchRequest, FetchSuccess } from '../../actions/Fetch';
import Loader from '../presentationals/Loader';
import StreamCard from '../presentationals/StreamCard';

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
		// setTimeout(() => {
		// 	this.forceUpdate();
		// }, 3000);
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
				// console.log(res.data);
				this.props.dispatch(FetchSuccess(res.data.featured));
			})
			.catch((e) => {
				console.log(e);
			});
	}

	render() {
		const stateProps = this.props.state;
		const status = stateProps.status;
		const streamCardItems = this.props.state.streams.map((str) => {
			return (
				<StreamCard
					key={str.stream._id}
					streamCover={str.stream.preview.medium}
					streamLink={str.stream.channel.url}
				/>
			);
		});
		return (
			<div>
				{status === 'loading' ? (
					<Loader />
				) : status === 'success' ? (
					<div className="stream-cards">{streamCardItems}</div>
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
