import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import Ptext from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
  }

  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;

    span {
      display: inline-block;
      width: 100%;
    }

    .hero__name {
      font-size: 5rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }

  .hero-img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }

  .hero-info {
    margin-top: -18rem;
  }

  .hero-social,
  .hero-scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 30px;
    width: 50px;
  }

  .hero-social {
    left: 50px;
  }

  .hero-scrollDown {
    right: 50px;
  }

  .hero-social-indicator,
  .hero-scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }

    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .hero-scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero-social-text {
    ul {
      li {
        margin-bottom: 1rem;
      }

      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }

    .hero-heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }

    .hero-img {
      height: 300px;
    }

    .hero-info {
      margin-top: 3rem;
    }

    .hero-social {
      left: 0;

      width: 20px;
      .hero-social-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }

      .hero-social-text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .hero-scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello, This is</span>
            <span className="hero__name">Aneesh Awadhiya</span>
          </h1>
          <div className="hero-img">
            <img src={HeroImg} alt=" " />
          </div>
          <div className="hero-info">
            <Ptext>
              I am working as a fresher a freelancer web designer and developer
              for 4 yr. I love to design and make new web experiences for the
              people.
            </Ptext>
            <Button btnLink="/projects" btnText="See my works" />
            <div className="hero-social">
              <div className="hero-social-indicator">
                <p>Follow</p>
                <img src={SocialMediaArrow} alt="" />
              </div>
              <div className="hero-social-text">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/aneeshawadhiya/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      IN
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/aneeshawadhiya/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/aneeshawadhiya"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GIT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero-scrollDown">
              <p>Scroll</p>
              <img src={ScrollDownArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
