import React from 'react';
import Auth from '../components/Auth/Auth';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  return <Auth text={t('login')} />;
};

export default Login;
