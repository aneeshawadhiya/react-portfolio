import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Ptext from './Ptext';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;

  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }

  .contactBanner__heading {
    margin-top: 1rem;
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <Ptext>Have a project in mind</Ptext>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
