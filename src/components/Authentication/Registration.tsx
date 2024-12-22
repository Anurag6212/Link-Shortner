'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../ui/button';
import { DialogFooter } from '../ui/dialog';
import DialogWrapper from '../ui/dialog-wrapper';
import styles from '../../styles/login.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleLoginMode } from '@/lib/Reducers/authSlice';
import { registerInput } from '@/Interfaces/formInterfaces';

const Registration = ({}) => {
  const { loginMode } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerInput>();

  const onSubmit: SubmitHandler<registerInput> = (data) => console.log(data);

  return (
    <DialogWrapper
      open={loginMode === 'register'}
      setOpen={() => dispatch(toggleLoginMode(''))}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['dialog-wrapper']}
      >
        <div className="mb-4">
          <label htmlFor="firstName" className={styles.label}>
            First Name
          </label>
          <input
            id="firstName"
            placeholder="Enter your email"
            className={styles.input}
            {...register('firstName', { required: true, maxLength: 80 })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className={styles.label}>
            Last Name
          </label>
          <input
            id="lastName"
            {...register('lastName', { required: true, maxLength: 80 })}
            placeholder="Enter your email"
            className={styles.input}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={styles.input}
            {...register('email', { required: true, maxLength: 40 })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={styles.input}
            {...register('password', { required: true, maxLength: 30 })}
          />
        </div>
        <DialogFooter className={styles['dialog-footer']}>
          <Button type="submit">Register</Button>
        </DialogFooter>
      </form>
    </DialogWrapper>
  );
};

export default Registration;
