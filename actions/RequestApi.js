import axios from 'axios';
import { FetchFailure, FetchRequest, FetchSuccess } from './Fetch';
import { keys } from '../config';

// RequestApi thunk
export default () => {
	return (dispatch) => {
		dispatch(FetchRequest());

		axios
			.get('https://api.twitch.tv/kraken/streams/featured', {
				headers: {
					Accept: 'application/vnd.twitchtv.v5+json',
					'Client-ID': keys.ClientID
				}
			})
			.then((res) => {
				dispatch(FetchSuccess(res.data.featured));
			})
			.catch((e) => {
				dispatch(FetchFailure(e));
			});
	};
};
