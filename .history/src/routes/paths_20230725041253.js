// ----------------------------------------------------------------------

function path(root, sublink) {
	return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	general: {
		app: path(ROOTS_DASHBOARD, 'home'),
		contact: path(ROOTS_DASHBOARD, 'contact'),
		about: path(ROOTS_DASHBOARD, 'about'),
		chat: path(ROOTS_DASHBOARD, 'chat'),
		auth: path(ROOTS_DASHBOARD, 'login'),
	},
};
