import './globals.css';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Civil Intelligent System</title>
      </head>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
