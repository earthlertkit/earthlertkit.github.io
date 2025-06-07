import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { NAME, LINKS } from '../constants/home.js';
import GitHub from './icons/GitHub';
import LinkedIn from './icons/LinkedIn';
import Email from './icons/Email';
import Resume from './icons/Resume';
import LeftAlignedTextBox from './LeftAlignedTextBox';

const ICONS = {
  GitHub: <GitHub />,
  LinkedIn: <LinkedIn />,
  Email: <Email />,
  Resume: <Resume />,
};

const ButtonLink = ({ href, target, rel, children }) => (
  <a
    className="button-link"
    href={href}
    target={target}
    rel={rel}
  >
    {ICONS[children]}
    {children}
  </a>
);

const ORDER = ['GitHub', 'LinkedIn', 'Email', 'Resume'];

const Home = () => (
  <>
    <Header />
    <main className="center-content">
      <LeftAlignedTextBox>
        <div className="name">
          <span>Wichayut</span>
          <br />
          <span>Lertkittiamornkul</span>
          <span className="blinking-cursor">|</span>
        </div>
        <div className="links">
          {ORDER.map(label => {
            const link = LINKS.find(l => l.label === label);
            return link ? (
              <ButtonLink key={link.label} href={link.href} target={link.target} rel={link.rel}>
                {link.label}
              </ButtonLink>
            ) : null;
          })}
        </div>
      </LeftAlignedTextBox>
    </main>
  </>
);

export default Home; 