import { Base, ItemsDiv, Div } from './styles';
import { Menu } from '../../components/Menu';
import { LateralMenu } from '../../components/LateralMenu';
import { UserForm } from '../../components/UserForm';

export function DashboardForm() {
  return (
    <Base>
      <ItemsDiv>
        <Menu />
        <Div>
          <LateralMenu />
          <UserForm />
        </Div>
      </ItemsDiv>
    </Base>
  );
}
