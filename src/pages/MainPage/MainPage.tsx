import React, { useState, useEffect } from 'react';
import { Section } from '@/containers/Section/Section';
import { Action } from '@/components/Action/Action';
import { Modal } from '../../containers/Modal/Modal';
import LoginForm from '../../screens/LoginForm/LoginForm';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { getMainData, MainData } from '@/api/mainApi.ts';
import { useTranslation } from 'react-i18next';
import { Card } from '../../containers/Card/Card';
import LanguageSelector from '@/components/LandSelector/LandSelector';

const MainPage: React.FC = () => {
	const [modalState, setModalState] = useState<'login' | 'register' | null>(null);
	const [data, setData] = useState<MainData | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [t] = useTranslation();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getMainData();
				setData(response);
			} catch (err) {
				setError(err instanceof Error ? err.message : String(err));
			}
		};
		fetchData();
	}, []);

	const closeModal = () => setModalState(null);

	const handleLoginSubmit = (email: string, password: string) => {
		console.log('Logging In...\nDATA:', { email, password });
		closeModal();
	};

	const handleRegisterSubmit = (name: string, email: string, password: string) => {
		console.log('Registering...\nDATA:', { name, email, password });
		closeModal();
	};

	return (
		<Section>
			<Card>
				<LanguageSelector />
				<Action type="button" text={t('navigation.login')} onClick={() => setModalState('login')} />
				<Action type="button" text={t('navigation.register')} onClick={() => setModalState('register')} />
			</Card>
			{modalState === 'login' && (
				<Modal onClose={closeModal}>
					<LoginForm onSubmit={handleLoginSubmit} />
				</Modal>
			)}
			{modalState === 'register' && (
				<Modal onClose={closeModal}>
					<RegisterForm onSubmit={handleRegisterSubmit} />
				</Modal>
			)}
			{error && <div>Error: {error}</div>}
		</Section>
	);
};

export default MainPage;