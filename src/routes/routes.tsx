import { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage/RegisterPage'));

export const routes = [
	{ index: true, element: <MainPage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/register', element: <RegisterPage /> },
];