import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem-img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);

    img {
      height: 100%;
    }
  }

  .projectItem-info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }

  .projectItem-title {
    font-size: 2.2rem;
  }
  .projectItem-desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .projectItem-img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem-img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem-info">
        <Link to="#">
          <h3 className="projectItem-title">{title}</h3>
        </Link>
        <p className="projectItem-desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
