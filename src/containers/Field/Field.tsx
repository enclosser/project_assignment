import clsx from "clsx";

export type FieldProps = {
	className?: string;
	inputID?: string;
	text: string;
	children: React.ReactNode;
};

export function Field({ className, inputID, children, text }: FieldProps) {
	return (
		<div>
			<label htmlFor={inputID} className={clsx(className)}>
				{text}
			</label>
			{children}
		</div>);
}
