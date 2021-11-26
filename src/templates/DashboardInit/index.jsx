import { Base, ItemsDiv, Div } from './styles';
import { Menu } from '../../components/Menu';
import { LateralMenu } from '../../components/LateralMenu';
import { InitContent } from '../../components/InitContent';

export function DashboardInit() {
  return (
    <Base>
      <ItemsDiv>
        <Menu />
        <Div>
          <LateralMenu />
          <InitContent />
        </Div>
      </ItemsDiv>
    </Base>
  );
}
