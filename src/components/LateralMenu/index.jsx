import { Base, ItemsDiv, Div } from './styles';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';
import { Dash, Form, User, Map } from '../Icons';
import { MenuText } from '../MenuText';

export function LateralMenu(props) {
  const router = useRouter();

  return (
    <Base>
      <ItemsDiv>
        <MenuText
          margin="0 0 34px 0"
          fontWeight="700"
          fontSize="14px"
          lineHeight="16.41px"
          color="#797D9A"
        >
          GERAL
        </MenuText>
        <Div margin="0 0 20px 0">
          <Dash active={true} margin="0 20px 0 0" />
          <MenuText active={true}>Dashboard</MenuText>
        </Div>
        <Div margin="0 0 50px 0">
          <User margin="0 23px 0 0" />
          <MenuText>Usuários</MenuText>
        </Div>

        <MenuText
          color="#797D9A"
          fontWeight="700"
          fontSize="14px"
          lineHeight="16.41px"
          margin="0 0 34px 0"
        >
          AUTOMAÇÃO
        </MenuText>
        <Div margin="0 0 20px 0">
          <Form margin="0 23px 0 0" />
          <MenuText>Formulários</MenuText>
        </Div>
        <Div>
          <Map margin="0 14px 0 0" />
          <MenuText>Automação</MenuText>
        </Div>
      </ItemsDiv>
    </Base>
  );
}
