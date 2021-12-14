import React from 'react';
import Auth from '../components/Auth/Auth';
import { useTranslation } from 'react-i18next';

const Signup = () => {
  const { t } = useTranslation();

  return <Auth text={t('signup')} />;
};

export default Signup;
