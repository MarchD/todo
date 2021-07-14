import React from "react";
import {IntroLayout} from "../layouts/IntroLayout/IntroLayout";
import styles from './index.module.scss';

export const Intro = () => {
  return (
    <IntroLayout>
      <h1 className={styles.title}>Todo</h1>
    </IntroLayout>
  )
}

export default Intro;
