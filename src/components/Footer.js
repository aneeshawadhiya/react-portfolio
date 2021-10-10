import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import Ptext from './Ptext';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 3rem;
  }

  .footer_col1 {
    flex: 2;
  }

  .footer_col2,
  .footer_col3,
  .footer_col4 {
    flex: 1;
  }

  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 2rem 0;
    margin-top: 8rem;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }

    .footer_col1 .para {
      max-width: 100%;
    }

    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Aneesh Awadhiya</h1>
          <Ptext>
            A freelancer web desginer and developer from Maharastra, India. I
            always make website that haave unique designs and also has a good
            performance rate.
          </Ptext>
        </div>

        <div className="footer_col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/project',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>

        <div className="footer_col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+918120229647',
                path: 'tel:+918120229647',
              },
              {
                title: 'aneesh.awadhiya@gmail.com',
                path: 'mailto:aneesh.awadhiya@gmail.com',
              },
              {
                title: 'Pune, Maharastra',
                path: 'https://www.google.com/maps/@18.5248904,73.7228831,11z',
              },
            ]}
          />
        </div>

        <div className="footer_col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/aneeshawadhiya/',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/aneesh.awadhiya/',
              },
              {
                title: 'Github',
                path: 'https://github.com/aneeshawadhiya/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>© 2021 - Aneesh Awadhiya</Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
