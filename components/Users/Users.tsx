import React from "react";
import styles from './Users.module.scss';
import {IntroLayout} from '../../layouts/IntroLayout';
import {Title} from "../common/Title";

export const Users = () => {
  return (
    <IntroLayout>
      <div className={styles.intro}>
        <Title>Choice user</Title>
      </div>
    </IntroLayout>
  )
}
