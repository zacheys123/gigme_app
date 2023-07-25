import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';

// config
import { DEFAULT_PATH } from '../config';
import LoadingScreen from '../components/LoadingScreen';
import Main_App from '../layouts/gig_me';

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
			element: <Main_App />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH} replace />,
					index: true,
				},
				{ path: 'app', element: <Home /> },
				{ path: '404', element: <Page404 /> },
				{ path: '*', element: <Navigate to="/404" replace /> },
				{
					path: 'about',
					element: <About />,
				},
			],
		},
		{
			path: '/chat',
			element: <DashboardLayout />,
			children: [{ index: true, element: <GeneralApp /> }],
		},
	]);
}
const Home = Loadable(lazy(() => import('../pages/main_app/Home')));
const GeneralApp = Loadable(
	lazy(() => import('../pages/dashboard/GeneralApp')),
);
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
const About = Loadable(lazy(() => import('../pages/About')));
