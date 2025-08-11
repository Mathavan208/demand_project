import React from 'react';
import ReactDOM from 'react-dom/client';
import { gsap } from 'gsap';
import Router from './Router';
import './index.css';

// Initialize GSAP
gsap.config({ nullTargetWarn: false });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);