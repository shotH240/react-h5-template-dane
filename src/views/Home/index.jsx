import React, { } from 'react';
import { Outlet } from 'react-router-dom';
import './css/index.less';
export default function Home() {
  return (
    <div className='home'>
      <input type='text'/>
      <Outlet />
    </div>
  );
}
