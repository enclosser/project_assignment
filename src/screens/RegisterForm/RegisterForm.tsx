import { Field } from "../../containers/Field/Field";
import { Input } from "../../components/Input/Input";
import { Action } from "../../components/Action/Action";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type RegisterFormProps = {
	onSubmit: (userName: string, email: string, password: string) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [formState, setFormState] = useState({
		userName: '',
		email: '',
		password: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [t] = useTranslation();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		const { userName, email, password } = formState;
		onSubmit(userName, email, password);
		setIsLoading(false);
	};

	const isFormValid = formState.email && formState.password && formState.userName;

	return (
		<form className="form" onSubmit={handleSubmit}>
			<Field inputID="userName" text={t('authentication.enterName')}>
				<Input id="userName" type="text" onChange={handleChange} />
			</Field>
			<Field inputID="email" text={t('authentication.enterEmail')}>
				<Input id="email" type="email" onChange={handleChange} />
			</Field>
			<Field inputID="password" text={t('authentication.createPassword')}>
				<Input id="password" type="password" onChange={handleChange} />
			</Field>
			<Action
				type="button"
				disabled={!isFormValid}
				text={isLoading ? t('isLoading') : t('Send')}
			/>
		</form>
	);
};

export default RegisterForm;