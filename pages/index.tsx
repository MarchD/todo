import React from "react";
import {IntroLayout} from "../layouts/IntroLayout/IntroLayout";
import styles from './index.module.scss';
import Button from "../components/Button";

export const Intro = () => {
    return (
        <IntroLayout>
            <div className={styles.intro}>
                <h1 className={styles.title}>Todo</h1>
                <Button
                    onClick={() => {
                    }}
                    label={'Go!'}
                />
            </div>
        </IntroLayout>
    )
}

export default Intro;
