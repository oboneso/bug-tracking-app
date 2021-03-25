// Packages
import React from 'react';

import style from './card_container.module.css';

import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

const CardContainer = ({ children }) => {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				// reset the state of your app so the error doesn't happen again
			}}>
			<CardContainer className={style.cardContainer}></CardContainer>
		</ErrorBoundary>
	);
};

export default CardContainer;
