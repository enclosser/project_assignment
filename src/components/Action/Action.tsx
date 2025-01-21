import clsx from "clsx";
import styles from './Action.module.scss';

export type ActionProps = {
    type: 'button' | 'link';
    href?: string;
    text: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
};

export function Action({type, href, disabled, text, className, onClick}: ActionProps) {
    if (type === 'button') {
        return (
            <button
                disabled={disabled}
                className={clsx(styles.button, className)}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }

    if (type === 'link' && href) {
        return (
            <a
                className={clsx(styles.link, className)}
                href={href}
            >
                {text}
            </a>
        );
    }

    return null;
}