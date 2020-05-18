import React from 'react';
import useScrollProgressBar from '../hooks/useScrollProgressBar';

export default function Index() {
	useScrollProgressBar();

	return (
		<div className="root">
      <div style={{ height: 10000}}></div>
		</div>
	);
}
