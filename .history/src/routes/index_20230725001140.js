import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
import Auth from '../layouts/auth';

// config
import { DEFAULT_PATH } from '../config';
import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <DashboardLayout />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH} replace />,
					index: true,
				},
				{ path: 'app', element: <GeneralApp /> },

				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to="/404" replace /> },
			],
		},
		{
			path: 'auth',
			element: <Auth />,
			children: [
				{
					path: 'login',
					element: <Page404 />,
				},
			],
		},
		{ path: '*', element: <Navigate to="/404" replace /> },
	]);
}

const GeneralApp = Loadable(
	lazy(() => import('../pages/dashboard/GeneralApp')),
);
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
const About = Loadable(lazy(() => import('../pages/About')));