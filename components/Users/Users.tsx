import React from "react";
import styles from './Users.module.scss';
import {IntroLayout} from '../../layouts/IntroLayout';
import {Title} from "../common/Title";
import {Select} from "../common/Select";
import {IUser} from "../../types/user";

const users: IUser[] = [
  {
    _id: 1,
    website: 'awdaw.com',
    "name": "Changed Mate",
    "username": "changedusername",
    "email": "changed@example.com",
    "phone": "0987654321"
  },{
    _id: 2,
    website: 'awdaw.com',
    "name": "Changed Mate",
    "username": "changedusername",
    "email": "changed@example.com",
    "phone": "0987654321"
  },{
    _id: 3,
    website: 'awdaw.com',
    "name": "Changed Mate",
    "username": "changedusername",
    "email": "changed@example.com",
    "phone": "0987654321"
  },
]

export const Users = () => {
  return (
    <IntroLayout>
      <div className={styles.intro}>
        <Title>Choice user</Title>
        <Select selected={'dadwawd'} items={users} />
      </div>
    </IntroLayout>
  )
}
