import React from "react";
import clsx from "clsx";
import { Action } from "../Action/Action";
import { useTranslation } from "react-i18next";
import styles from './LandSelector.module.scss';

const languages = [
	{ code: 'en', lang: 'English' },
	{ code: 'ru', lang: 'Русский' }
];

const LandSelector: React.FC = () => {
	const { i18n } = useTranslation();

	const changeLanguage = async (lng: string) => {
		await i18n.changeLanguage(lng);
	};

	return (
		<div className={styles.container}>
			{languages.map((lng) => (
				<Action
					type="button"
					key={lng.code}
					disabled={lng.code === i18n.language}
					text={lng.lang}
					className={clsx(styles.button)}
					onClick={() => changeLanguage(lng.code)}
				/>
			))}
		</div>
	);
};

export default LandSelector;