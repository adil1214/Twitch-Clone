import { FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS } from './../actions/actionTypes';

const initialState = {
	status: '',
	streams: [],
	error: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REQUEST:
			return {
				...state,
				status: action.status
			};
		case FETCH_SUCCESS:
			return {
				...state,
				status: action.status,
				streams: action.streams
			};
		case FETCH_FAILURE:
			return {
				...state,
				status: action.status,
				error: action.error
			};
		default:
			return state;
	}
};
