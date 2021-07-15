import React from "react";
import styles from './Intro.module.scss';
import {IntroLayout} from '../../layouts/IntroLayout';
import {Button} from '../common/Button';
import {useRouter} from "next/router";
import {Title} from "../common/Title";

export const Intro = () => {
  const router = useRouter();

  return (
    <IntroLayout>
      <div className={styles.intro}>
        <Title>Todo</Title>
        <Button onClick={() => router.push('/users')}>Go!</Button>
      </div>
    </IntroLayout>
  )
}
