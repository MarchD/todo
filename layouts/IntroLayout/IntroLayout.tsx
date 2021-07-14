import React from "react";
import styles from './IntroLayout.module.scss';

export const IntroLayout: React.FC = ({children}) => {
    return (
        <div className={styles.block}>
            {children}
        </div>
    )
}
