import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
import Main_App from '../layouts/gig_me';
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
			element: <Main_App />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH} replace />,
					index: true,
				},
				{ path: 'home', element: <Home /> },

				{ path: '*', element: <Navigate to="/404" replace /> },
			],
		},
		{
			path: 'about',
			element: <About />,
		},
		{ path: '404', element: <Page404 /> },
		,
		{
			path: '/chat',
			element: <DashboardLayout />,
			children: [{ index: true, element: <ChatApp /> }],
		},
	]);
}
const Home = Loadable(lazy(() => import('../pages/main_app/Home')));
const ChatApp = Loadable(
	lazy(() => import('../pages/dashboard/ChatApp')),
);
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
const About = Loadable(lazy(() => import('../pages/main_app/About')));
