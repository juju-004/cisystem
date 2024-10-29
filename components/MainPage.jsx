'use client';

import React from 'react';
import { Button, Divider, Tabs } from 'antd';
import Chat from './Chat';
// import { useUser } from '@auth0/nextjs-auth0/client';

const MainPage = () => {
  // const { user } = useUser();
  let data = [
    { value: 'Health care', system: 'You are a health care assistant that only answers health care related issues' },
    {
      value: 'Domestic Violence',
      system: 'You provide steps on how to stay away from or report any form of domestic violence'
    },
    {
      value: 'Legal Assistance',
      system: 'You are a legal assistant bot that only answers legal related issues'
    },
    {
      value: 'Education & public learning',
      system: 'You are an educational assistant that only answers educational related issues'
    },
    {
      value: 'Disaster Response',
      system: 'You only provide responses for natural dissater forecasts and what to do in case of a natural disaster'
    }
  ];

  return (
    <div className="w-full flex max-w-[700px] flex-col mx-auto h-full px-5">
      <nav className="flex py-3 items-center justify-between mb-8">
        <h1 className="font-bold">Civil Intelligence</h1>
        <span className="fx gap-3">
          <a href="/api/auth/logout">
            <Button className="!bg-slate-800 !border-0 !text-white rounded-lg">logout</Button>
          </a>
        </span>
      </nav>

      <Tabs
        defaultActiveKey="0"
        items={data.map((d, i) => {
          return {
            label: <span className="fx gap-3 px-5">{d.value}</span>,
            key: String(i + 0),
            children: <Chat v={d} />
          };
        })}
      />
    </div>
  );
};
export default MainPage;
