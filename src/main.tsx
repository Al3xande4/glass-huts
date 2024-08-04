import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout/Layout';
import HomePage from './pages/Home/Home';
import { AreaPage } from './pages/Area/Area';
import { HutPage } from './pages/Hut/Hut';
import { AboutPage } from './pages/About/About';
import { FaqPage } from './pages/Faq/Faq';

const Router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{
				path: '/area',
				element: <AreaPage />,
			},
			{
				path: '/hut',
				element: <HutPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/faq',
				element: <FaqPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={Router}></RouterProvider>
	</React.StrictMode>
);
