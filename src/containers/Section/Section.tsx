import React from 'react';
import classNames from 'classnames';

export type SectionProps = {
	children: React.ReactNode;
	className?: string;
};

export const Section: React.FC<SectionProps> = ({ children, className }) => {
	return (
		<section className={classNames('sectionContainer', className)}>
			<div className="sectionContent">
				{children}
			</div>
		</section>
	);
};