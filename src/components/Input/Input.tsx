import React from "react";
import clsx from "clsx";
import styles from './Input.module.scss';

export type InputProps = {
	type?: 'email' | 'userName' | 'password' | 'text';
	value?: string;
	id?: string;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ type, id, value, onChange, className }: InputProps) {
	let placeholder: string;
	let inputType: string;

	switch (type) {
		case 'email':
			placeholder = 'example@domain.com';
			inputType = 'email';
			break;

		case 'userName':
			placeholder = 'Enter your name';
			inputType = 'text';
			break;

		case 'password':
			placeholder = 'Create a secure password';
			inputType = 'password';
			break;

		case 'text':
			placeholder = 'Type here...';
			inputType = 'text';
			break;

		default:
			placeholder = 'Please enter a value';
			inputType = 'text';
			break;
	}

	return (
		<input
			type={inputType}
			className={clsx(styles.input, className)}
			id={id}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
}