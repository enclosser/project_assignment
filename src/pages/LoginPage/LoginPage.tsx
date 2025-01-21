import React from 'react';
import { Section } from '../../containers/Section/Section';
import { Card } from '../../containers/Card/Card';
import LoginForm from '../../screens/LoginForm/LoginForm';

const handleLogIn = async (email: string, password: string) => {
	console.log('Login submitted:', { email, password });
};

const LoginPage: React.FC = () => {
    return (
		<Section>
			<Card>
				<LoginForm onSubmit={handleLogIn} />
			</Card>
		</Section>
	);
};

export default LoginPage