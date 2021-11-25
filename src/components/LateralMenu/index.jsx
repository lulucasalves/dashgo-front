import { Base, ItemsDiv, Div } from './styles';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';
import { SearchInput } from '../SearchInput';
import { Dash, Form, User, Map } from '../Icons';

export function Menu(props) {
  const router = useRouter();

  return (
    <Base>
      <ItemsDiv></ItemsDiv>
    </Base>
  );
}
