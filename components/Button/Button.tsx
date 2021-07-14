import React, {FC} from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    label: string;
    onClick: Function
}

export const Button: FC<ButtonProps> = ({label = '', onClick}) => {
    const handleChange = () => onClick();
    return (
        <button className={styles.button} onClick={handleChange}>
            {label}
        </button>
    )
};
