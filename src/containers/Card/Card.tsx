import React from "react";
import styles from "./Card.module.scss";

export type CardProps = {
	children: React.ReactNode;
	header?: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
};

export const Card: React.FC<CardProps> = ({
											  children,
											  header,
											  footer,
											  className,
										  }) => {
	return (
		<div className={`${styles.card} ${className || ""}`}>
			{header && <div className={styles.cardHeader}>{header}</div>}
			<div className={styles.cardBody}>{children}</div>
			{footer && <div className={styles.cardFooter}>{footer}</div>}
		</div>
	);
};