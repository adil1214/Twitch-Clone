import { FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS } from './actionTypes';

//
export const FetchRequest = () => ({
	type: FETCH_REQUEST,
	status: 'loading'
});

//
export const FetchSuccess = (streams) => ({
	type: FETCH_SUCCESS,
	status: 'success',
	streams
});

export const FetchFailure = (error) => ({
	type: FETCH_FAILURE,
	status: 'error',
	error
});
