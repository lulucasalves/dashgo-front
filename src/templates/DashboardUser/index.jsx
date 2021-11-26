import { Base, ItemsDiv, Div } from './styles';
import { Menu } from '../../components/Menu';
import { LateralMenu } from '../../components/LateralMenu';
import { UserContent } from '../../components/UserContent';

export function DashboardUser() {
  return (
    <Base>
      <ItemsDiv>
        <Menu />
        <Div>
          <LateralMenu />
          <UserContent />
        </Div>
      </ItemsDiv>
    </Base>
  );
}
