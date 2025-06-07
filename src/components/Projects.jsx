import React from 'react';
import Header from './Header';
import TwoColumnBox from './TwoColumnBox';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants/projects.js';

const Projects = () => (
  <>
    <Header />
    <main className="center-content">
      <TwoColumnBox
        left={
          <>
            {PROJECTS.map((project, idx) => (
              <div className="project-container" key={project.title}>
                <div className="text-section">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">{project.description}</div>
                </div>
                {project.video && (
                  <div className="video-section-quadrotor-rl">
                    <video autoPlay loop muted playsInline>
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            ))}
          </>
        }
        right={
          <>
            {PROJECTS.map((project, idx) =>
              project.images ? (
                <div className="img-section-quadrotor-sim" key={project.title + '-images'}>
                  {project.images.map(img => (
                    <img key={img.src} src={img.src} alt={img.alt} />
                  ))}
                </div>
              ) : null
            )}
          </>
        }
      />
    </main>
  </>
);

export default Projects; 