import styles from './Modal.module.scss';


export type ModalProps = {
	children: React.ReactNode;
	onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
	return <div className={styles.overlay}>
		<div className={styles.modal}>
			<button className={styles.xButton} onClick={onClose}>X</button>
			{children}
		</div>
	</div>;
}
