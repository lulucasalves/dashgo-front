import { Base, ItemsDiv, Div } from './styles';
import { useRouter } from 'next/router';
import { routesDocument } from '../../../../routes';
import { Dash, Form, User, Map, Exit } from '../../../Icons';
import { MenuText } from '../../../MenuText';
import { DefaultText } from '../../../DefaultText';
import { useState } from 'react';

export function LateralMenuResponsive(props) {
  const router = useRouter();
  const path = router.pathname;
  const [active, setActive] = useState(false);

  function dashboardInitialRoute() {
    if (path == routesDocument.dashboardInitial) {
      return '#D53F8C';
    } else {
      return null;
    }
  }

  function dashboardUsersRoute() {
    if (path == routesDocument.dashboardUsers) {
      return '#D53F8C';
    } else {
      return null;
    }
  }

  return (
    <Base active={active}>
      <ItemsDiv>
        <Exit
          top="32px"
          right="32px"
          onClick={() => setActive(false)}
        />
        <DefaultText fontWeight="700" fontSize="1.25rem" margin="0 0 24px 0">
          Navegação
        </DefaultText>
        <MenuText
          cursor="default"
          margin="0 0 34px 0"
          fontWeight="700"
          fontSize="0.875rem"
          lineHeight="16.41px"
          color="#797D9A"
        >
          GERAL
        </MenuText>
        <Div
          cursor="pointer"
          onClick={() => router.push(routesDocument.dashboardInitial)}
          margin="0 0 20px 0"
        >
          <Dash active={() => dashboardInitialRoute()} margin="0 20px 0 0" />
          <MenuText active={() => dashboardInitialRoute()}>Dashboard</MenuText>
        </Div>
        <Div
          onClick={() => router.push(routesDocument.dashboardUsers)}
          cursor="pointer"
          margin="0 0 50px 0"
        >
          <User active={() => dashboardUsersRoute()} margin="0 23px 0 0" />
          <MenuText active={() => dashboardUsersRoute()}>Usuários</MenuText>
        </Div>

        <MenuText
          cursor="default"
          color="#797D9A"
          fontWeight="700"
          fontSize="0.875rem"
          lineHeight="16.41px"
          margin="0 0 34px 0"
          cursor="pointer"
        >
          AUTOMAÇÃO
        </MenuText>
        <Div cursor="pointer" margin="0 0 20px 0">
          <Form margin="0 23px 0 0" />
          <MenuText>Formulários</MenuText>
        </Div>
        <Div cursor="pointer">
          <Map margin="0 14px 0 0" />
          <MenuText>Automação</MenuText>
        </Div>
      </ItemsDiv>
    </Base>
  );
}
