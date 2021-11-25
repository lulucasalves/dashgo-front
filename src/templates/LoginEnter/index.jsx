import { Base, ItemsDiv, Div } from './styles';
import { Login } from '../../components/Login';

export function LoginEnter() {
  return (
    <Base>
      <ItemsDiv>
        <Login />
      </ItemsDiv>
    </Base>
  );
}
