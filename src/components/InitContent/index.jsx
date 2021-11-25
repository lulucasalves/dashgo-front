import { Base, ItemsDiv, Div } from './styles';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';
import { Dash, Form, User, Map } from '../Icons';
import { MenuText } from '../MenuText';

export function InitContent(props) {
  const router = useRouter();

  return (
    <Base>
      <ItemsDiv>
        <MenuText margin="0 0 34px 0">GERAL</MenuText>
        <Div margin="0 0 20px 0">
          <Dash margin="0 18px 0 0" />
          <MenuText>Dashboard</MenuText>
        </Div>
        <Div margin="0 0 50px 0">
          <User margin="0 18px 0 0" />
          <MenuText>Usuários</MenuText>
        </Div>

        <MenuText margin="0 0 34px 0">AUTOMAÇÃO</MenuText>
        <Div margin="0 0 20px 0">
          <Form margin="0 18px 0 0" />
          <MenuText>Formulários</MenuText>
        </Div>
        <Div>
          <Map margin="0 18px 0 0" />
          <MenuText>Automação</MenuText>
        </Div>
      </ItemsDiv>
    </Base>
  );
}
