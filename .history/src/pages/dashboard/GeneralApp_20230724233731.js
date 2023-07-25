import React, { Suspense, lazy } from 'react';

const Cat = lazy(() => import('../../components/Chat/'));
const GeneralApp = () => {
	return (
		<>
			<Suspense fallback="loading...">
				<Cat />
			</Suspense>
		</>
	);
};

export default GeneralApp;
