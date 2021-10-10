import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;

  .span {
    justify-content: start;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection-left,
  .aboutSection-right {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .aboutSection-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection-left {
      flex: 4;
    }

    .aboutSection-right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .aboutSection-left,
    .aboutSection-right {
      width: 100%;
    }

    .aboutSection-right {
      margin-top: 3rem;
    }

    .section-title {
      text-align: center;
      align-items: center;
    }

    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }

    .aboutSection-buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 90%;
        text-align: center;
      }
    }

    .span {
      justify-content: center;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection-left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <Ptext>
            I am Freelancer website designer and developer from Pune, India. I
            Create professional websites. I love art and always try to show
            unique views to audience through my design.
          </Ptext>
          <div className="aboutSection-buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection-right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
