import { Base, ItemsDiv, Div } from './styles';
import { Menu } from '../../components/Menu';
import { LateralMenu } from '../../components/LateralMenu';

export function DashboardInit() {
  return (
    <Base>
      <ItemsDiv>
        <Menu />
        <Div>
          <LateralMenu />
        </Div>
      </ItemsDiv>
    </Base>
  );
}
