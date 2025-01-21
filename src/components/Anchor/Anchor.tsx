import React from "react";
import clsx from "clsx";
import styles from './Anchor.module.scss';
import { To, NavLink } from 'react-router-dom';

export type AnchorProps = {
	className?: string;
	href?: string;
	to?: To;
	text: string;
};

const Anchor: React.FC<AnchorProps> = ({ className, to, href, text }) => {
	if (to) {
		return (
			<NavLink
				className={clsx(styles.navLink, className)}
				to={to}
				activeClassName="active"
			>
				{text}
			</NavLink>
		);
	}

	return (
		<a className={clsx(styles.anchor, className)} href={href}>
			{text}
		</a>
	);
};

export default Anchor;