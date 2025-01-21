import { Field } from "@/containers/Field/Field";
import { Input } from "@/components/Input/Input";
import { Action } from "@/components/Action/Action";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type LoginFormProps = {
	onSubmit: (email: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [formState, setFormState] = useState({
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
		const { email, password } = formState;
		onSubmit(email, password);
		setIsLoading(false);
	};

	const isFormValid = formState.email && formState.password;

	return (
		<form className="form" onSubmit={handleSubmit}>
			<Field inputID="email" text={t('authentication.enterEmail')}>
				<Input id="email" type="email" onChange={handleChange} />
			</Field>
			<Field inputID="password" text={t('authentication.EnterPassword')}>
				<Input id="password" type="password" onChange={handleChange} />
			</Field>
			<Action
				type="button"
				disabled={!isFormValid}
				text={isLoading ? t('form.loadingMessage') : t('form.submit')}
			/>
		</form>
	);
};

export default LoginForm;