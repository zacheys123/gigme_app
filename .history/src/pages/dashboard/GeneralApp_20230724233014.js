import React, { Suspense, lazy } from 'react';

const Cat=lazy(()=>import())
const GeneralApp = () => {
	return (
		<>
			<Suspense fallback="loading...">
      <Cat/></Suspense>
		</>
	);
};

export default GeneralApp;
