import React from 'react';

// 2 props: streamCover & streamLink
export default (props) => {
	return (
		<div className="stream-cards">
			<a href={props.streamLink}>
				<img src={props.streamCover} className="stream-cover" />
			</a>
		</div>
	);
};
