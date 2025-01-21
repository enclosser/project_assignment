import React from "react";
import clsx from "clsx";
import styles from "./Typography.module.scss";

export type TypographyProps = {
	tag: "h1" | "h2" | "p" | "span" | "div";
	value: string;
	className?: string;
};

export const Typography: React.FC<TypographyProps> = ({ tag, value, className }) => {
	const CustomTag = tag as keyof JSX.IntrinsicElements;

	const styleMap: Record<string, string> = {
		h1: styles.mainHeader,
		h2: styles.mainHeader,
		p: styles.paragraph,
		span: styles.text,
		div: styles.text,
	};

	const extraStyle = styleMap[CustomTag] || "";

	return (
		<CustomTag className={clsx(extraStyle, className)}>
			{value}
		</CustomTag>
	);
};