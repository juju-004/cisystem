'use client';

import React from 'react';
import Landing from '../components/Landing';
import MainPage from '../components/MainPage';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Index() {
  const { user } = useUser();
  return <>{!user ? <Landing /> : <MainPage />}</>;
}
