import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;

  .services-allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services-allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />

        <div className="services-allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do UI/UX design for the Website that helps website to get a unique look"
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServiceSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develope mobile application. I create mobile app with eye catching UI."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
