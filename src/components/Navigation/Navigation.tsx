'use client';

import React from 'react';
import { Button } from '../ui/button';
import styles from '@/styles/navigation.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleLoginMode } from '@/store/Reducers/authSlice';
import dynamic from 'next/dynamic';
import { NavigationProps } from '@/Types/navigation';
// import { ThemeMode } from '../Theme/ThemeMode';

const Login = dynamic(() => import('@/components/Authentication/Login'), {
  ssr: false,
});

const Registration = dynamic(
  () => import('@/components/Authentication/Registration'),
  {
    ssr: false,
  }
);

const Navigation: React.FC<NavigationProps> = ({
  appName = 'Link Shortener',
}) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loginMode } = useAppSelector((state) => state.auth);

  const onLogin = () => {
    dispatch(toggleLoginMode('login'));
  };

  const onRegister = () => {
    dispatch(toggleLoginMode('register'));
  };

  return (
    <>
      <nav className={styles.navigation}>
        <span className={styles.appName}>{appName}</span>
        <div className={styles.buttonGroupClass}>
          {/* <ThemeMode /> */}
          {isAuthenticated && (
            <Button
              className={`${styles.navigationBtn} ${styles.navigationBtnActive}`}
              onClick={() => dispatch(toggleLoginMode(''))}
              aria-label="Logout"
            >
              Logout
            </Button>
          )}
          {!isAuthenticated && (
            <>
              <Button
                className={`${styles.navigationBtn} ${styles.navigationBtnActive}`}
                onClick={onLogin}
                aria-label="Login"
              >
                Login
              </Button>
              <Button
                className={`${styles.navigationBtn} ${styles.navigationBtnActive}`}
                onClick={onRegister}
                aria-label="Register"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </nav>
      {loginMode === 'login' && <Login />}
      {loginMode === 'register' && <Registration />}
    </>
  );
};

export default Navigation;
