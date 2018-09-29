import axios from 'axios';
import { FetchFailure, FetchRequest, FetchSuccess } from './Fetch';

// RequestApi thunk
export default () => {
	return (dispatch) => {
		dispatch(FetchRequest());
		
		axios
			.get('https://api.twitch.tv/kraken/streams/featured', {
				headers: {
					Accept: 'application/vnd.twitchtv.v5+json',
					'Client-ID': '5oi8aqqszxnpa5w2oxn99zsyby1ld2 '
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