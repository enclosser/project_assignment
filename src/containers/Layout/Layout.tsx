import React from "react";
import Header from "../Header/Header";

export type LayoutProps = {
	children: React.ReactNode;
	className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
	return (
		<div className={`layout ${className || ''}`}>
			<Header className="headerFooter" />
			<main className="mainContent">
				{children}
			</main>
		</div>
	);
};

export default Layout;