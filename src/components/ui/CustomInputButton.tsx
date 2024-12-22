'use client';

import React from 'react';
import styles from '../../styles/custombutton.module.scss';
import { Button } from './button';

const CustomInputButton = () => {
  return (
    <div className={styles['custom-ib']}>
      <input placeholder="Enter the link here" className={styles.input} />
      <Button className={styles.button}>Shorten Now!</Button>
    </div>
  );
};

export default CustomInputButton;
