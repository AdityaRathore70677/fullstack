import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Resume_Header from './ResumeCreate/Resume_Header';
import Resume_Person_Info from './ResumeCreate/Resume_Person_Info';
import Education from './ResumeCreate/Education'; // ✅ Fixed filename to match common naming convention

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Resume_Header />
    <Resume_Person_Info />
    <Education />
  </React.StrictMode>
);
