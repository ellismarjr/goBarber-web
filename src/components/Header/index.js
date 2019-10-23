import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Administrador</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/49/abott@adorable.png
"
              alt="Administrador"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
