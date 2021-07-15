import React, {FC} from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    onClick: Function
}

export const Button: FC<ButtonProps> = ({onClick, children}) => {
    const handleChange = () => onClick();
    return (
        <button className={styles.button} onClick={handleChange}>
            {children}
        </button>
    )
};
