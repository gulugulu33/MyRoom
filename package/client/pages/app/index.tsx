import React from 'react';
import DrawPanel from '../drawPanel';
import LeftPanel from '../leftPanel';
import RightPanel from '../rightPanel';
import './style.css';

export default function App() {
  return (
    <div className='flex-row-space-between app'>
      <LeftPanel></LeftPanel>
      <DrawPanel></DrawPanel>
      <RightPanel></RightPanel>
    </div>
  )
}
