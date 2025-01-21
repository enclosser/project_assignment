import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import Layout from './containers/Layout/Layout';
import React from "react";

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: publicRoutes,
	},
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;