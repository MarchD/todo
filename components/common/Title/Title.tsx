import React, {FC} from 'react';
import styles from './Title.module.scss';

export const Title: FC = ({children}) => (
  <h1 className={styles.title}>{children}</h1>
);
