import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';

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
			element: <Home />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH} replace />,
					index: true,
				},

				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to="/404" replace /> },
				{
					path: 'auth/login',
					element: <Login />,
				},
			],
		},
		{
			path: '/chat',
			element: <DashboardLayout />,
			children: [
				{ path: 'app', element: <GeneralApp /> },

				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to="/404" replace /> },
			],
		},

		{ path: '*', element: <Navigate to="/404" replace /> },
	]);
}
const Home = Loadable(lazy(() => import('../pages/Home')));
const GeneralApp = Loadable(
	lazy(() => import('../pages/dashboard/GeneralApp')),
);
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
const Login = Loadable(lazy(() => import('../pages/Login')));
