import React from 'react';
import styled from 'styled-components';
import Ptext from '../components/Ptext';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .left {
    flex: 3;
  }

  .right {
    flex: 2;
  }

  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;

    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 1rem;
    }
  }

  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }

  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }

  .about_info_items {
    margin-top: 15rem;
  }

  .about_info_item {
    margin-bottom: 10rem;
  }

  .about_info_heading {
    font-size: 3.2rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;

    .top-section {
      flex-direction: column;
      gap: 5rem;
    }

    .about_subheading {
      font-size: 1.8rem;
    }

    .about_heading {
      font-size: 2.8rem;
    }

    .about_info_heading {
      font-size: 2.8rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">
              Hi, I am <span>Aneesh Awadhiya</span>
            </p>
            <h2 className="about_heading">Software / Web Developer</h2>
            <div className="about_info">
              <Ptext>
                I am from Pune, Maharastra. Since my childhood, I love art and
                design. i always try to design stuff with my unique point of
                view. I also love to create things that can be usefull to
                others.
                <br /> <br />
                I started coding when i got introduced to it during my
                engineering. Coding is also an art for me. I love it and now I
                have the opportunity to design along with coding. I find it
                really interesting and I enjoy the process a lot.
                <br /> <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="aboutImage" />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Blowssoming Flower Eng. Med. Hr. School, Pali.']}
            />
            <AboutInfoItem
              title="College"
              items={[
                'Dr. D. Y. Patil School of Engineering and Technology, Pune.',
              ]}
            />
          </div>

          <div className="about_info_item">
            <h1 className="about_info_heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JS', 'REACT']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['NodeJS', 'Python', 'Express']}
            />
            <AboutInfoItem
              title="Design"
              items={['Figma', 'AdobeXD', 'Photoshop']}
            />
          </div>

          <div className="about_info_item">
            <h1 className="about_info_heading">Experience</h1>
            <AboutInfoItem
              title="2021"
              items={['FrontEnd Team Lead at EvolvingX']}
            />
            <AboutInfoItem
              title="2021"
              items={['Graphic Desginer Team Lead at Infini Organisation']}
            />
            <AboutInfoItem
              title="2020"
              items={['Python Developer at Catilina Developers']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
