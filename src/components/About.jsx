import React from 'react';
import Header from './Header';
import TwoColumnBox from './TwoColumnBox';
import '../styles/about.css';
import { ABOUT } from '../constants/about.js';
import SkillCard from './SkillCard';

const About = () => (
  <>
    <Header />
    <main className="center-content">
      <TwoColumnBox
        left={
          <>
            <h1 className="about-title">About</h1>
            <div className="about-description">{ABOUT}</div>
          </>
        }
        right={
          <div className="skills-grid">
            {['Python', 'C++', 'JavaScript', 'React', 'Three.js', 'ROS', 'MuJoCo', 'OpenAI Gym'].map(skill => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        }
      />
    </main>
  </>
);

export default About; 