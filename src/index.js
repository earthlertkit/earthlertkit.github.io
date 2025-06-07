import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';
import './styles/styles.css';
import './styles/index.css';
import './styles/projects.css';
import './styles/about.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
