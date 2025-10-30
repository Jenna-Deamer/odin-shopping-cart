import App from './App';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CartPage from './components/CartPage/CartPage';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> }, // renders at "/"
			{ path: 'shop', element: <ShopPage /> },
			{ path: 'shop/:category', element: <ShopPage /> },
			{ path: 'cart', element: <CartPage /> },
		],
	},
];

export default routes;
