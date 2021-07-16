import React, {FC, useState} from 'react';
import styles from './Select.module.scss';
import {IUser} from "../../../types/user";
import {arrowIco} from "../../../assets/icons";
import Image from "next/image";
import classNames from 'classnames/bind';

interface SelectProps {
  selected: string;
  items: IUser[];
}

export const Select: FC<SelectProps> = ({selected, items}) => {
  const [active, setActive] = useState(false)
  return (
    <div
      className={classNames(styles.select, {[styles.active]: active})}
      onClick={() => setActive(current => !current)}
    >
      <p className={styles.value}>
        <span>
          {selected}
        </span>
        <Image
          className={styles.arrow}
          src={arrowIco}
          width={15}
          height={15}
          alt="arrow"
        />
      </p>
      <ul className={styles.list}>
        {items.map(item =>
          <li key={item._id}>
            {item.username}
          </li>
        )}
      </ul>
    </div>
  )
};
