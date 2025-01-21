import React from "react";
import clsx from "clsx";
import { Typography } from "../../components/Typography/Typography";
import { useTranslation } from "react-i18next";
import Menu from "../Menu/Menu";

export type HeaderProps = {
	className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
	const [t] = useTranslation();

	return (
		<header className={clsx(className)}>
			<Typography tag="h1" value={t('navigation.title')} />
			<Menu />
		</header>
	);
};

export default Header;