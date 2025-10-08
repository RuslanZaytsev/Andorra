'use client';

import { ChangeEvent } from 'react';

import { TValue } from '@/shared/components/StateInput/types';

import styles from './StateInput.module.scss';

interface IInput {
  label?: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  error?: string;
  classname?: string;
  disabled?: boolean;
  value: TValue;
  onChange: (value: TValue) => void;
}

export const StateInput = ({
  label,
  value,
  onChange,
  type,
  placeholder = '',
  error,
  disabled,
}: IInput) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      <input
        disabled={disabled}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></input>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

// просто начал копать в сети как написать инпут на профессионально уровне и попробовал собрать свой с подсмотрами
