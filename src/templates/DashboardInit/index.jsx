import { Base, ItemsDiv, Div } from './styles';
import { Menu } from '../../components/Menu';

export function DashboardInit() {
  return (
    <Base>
      <ItemsDiv>
        <Menu />
      </ItemsDiv>
    </Base>
  );
}
