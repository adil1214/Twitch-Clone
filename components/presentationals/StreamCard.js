import React from 'react';

export default ({ streamLink, streamCover, streamer, streamTitle, streamViewers }) => {
	return (
		<div className="stream-card">
			<a href={streamLink} target="_blank">
				<img 
					className="stream-cover" 
					src={streamCover} 
					title={streamTitle} />
			</a>
			<div className="stream-info">
				<p>{streamer}</p>
				<p className="stream-title">{streamTitle}</p>
				<p>{streamViewers} viewers.</p>
			</div>
		</div>
	);
};
