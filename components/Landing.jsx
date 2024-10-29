'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Button from 'antd/es/button';
import React from 'react';

function Landing() {
  const { user, isLoading } = useUser();

  return (
    <div className="fx flex-col min-h-screen">
      <h1 className="text-5xl font-bold">Welcome to Civiq</h1>
      <h3 className="text-xl mt-2 font-bold opacity-50">Your no 1 Civil intelligent system</h3>

      {isLoading ? (
        <span className="mt-4">Loading...</span>
      ) : (
        <a href="/api/auth/login" className="mt-6">
          <Button className="!bg-slate-800 !border-0 !text-white rounded-lg">Sign in</Button>
        </a>
      )}
    </div>
  );
}

export default Landing;
