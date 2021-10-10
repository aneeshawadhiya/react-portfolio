import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './Ptext';

const ItemStyles = styled.div`
  text-align: center;

  .servicesItem-icon {
    svg {
      width: 3rem;
    }
  }

  .servicesItem-title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }

  .para {
    margin-top: 2rem;
  }
`;

export default function ServiceSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero eveniet doloremque eos mollitia molestiae a, officia reprehenderit rerum ex eum beatae quaerat minus distinctio, culpa velit error repellendus at?',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem-icon">{icon}</div>
      <div className="servicesItem-title">{title}</div>

      <Ptext>{desc}</Ptext>
    </ItemStyles>
  );
}
