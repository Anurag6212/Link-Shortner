import React from 'react';
import CustomInputButton from '../ui/CustomInputButton';
import RenderTable from './RenderTable';
import styles from '../../styles/middleSection.module.scss';
import { Switch } from '../ui/switch';

const MiddleSection = () => {
  return (
    <div className="flex align-center justify-center flex-col pt-20 items-center">
      <h1 className={styles.title}>Shorten Your Loooong Links</h1>
      <p className={styles.description}>
        Link shortener is an efficient and easy-to-use URL shortening service
        that streamlines your online experience.
      </p>
      <CustomInputButton />
      <div className="my-4 flex align-center gap-[16px]">
        <Switch className="data-[state=checked]:bg-zinc-800 data-[state=unchecked]:bg-zinc-800 switch-middle" />
        <p className="text-sm font-light text-[#C9CED6]">
          Auto Paste from Clipboard
        </p>
      </div>
      <div className="w-5/6">
        <RenderTable />
      </div>
    </div>
  );
};

export default MiddleSection;
