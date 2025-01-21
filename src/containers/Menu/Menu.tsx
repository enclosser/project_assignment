import React from 'react';
import Anchor from '../../components/Anchor/Anchor';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export type MenuProps = {
	className?: string;
};

const Menu: React.FC<MenuProps> = ({ className }) => {
	const { t } = useTranslation();

	const navItems = [
		{ href: '/', key: 'home' },
		{ href: '/login', key: 'login' },
		{ href: '/register', key: 'register' },
	];

	return (
		<nav className={clsx('navBar', className)}>
			<ul className="navBarList">
				{navItems.map(({ href, key }) => (
					<li key={key}>
						<Anchor className="navBarLinks" href={href} text={t(`navigation.${key}`)} />
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;