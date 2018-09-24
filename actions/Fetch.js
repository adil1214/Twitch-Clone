import { FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS } from './actionTypes';

// FetchRequest action creator
export const FetchRequest = () => ({
	type: FETCH_REQUEST,
	status: 'loading'
});

// FetchSuccess action creator
export const FetchSuccess = (streams) => ({
	type: FETCH_SUCCESS,
	status: 'success',
	streams
});

// FetchFailure action creator
export const FetchFailure = (error) => ({
	type: FETCH_FAILURE,
	status: 'error',
	error
});
