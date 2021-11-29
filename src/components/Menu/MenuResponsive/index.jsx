import { Base, ItemsDiv, Div, BaseL } from './styles';
import { routesDocument } from '../../../routes';
import { Bell, UserPlus, Bars, Exit } from '../../Icons';
import { Logo } from '../../Logo';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { DefaultText } from '../../DefaultText';
import { LateralMenu } from '../../LateralMenu';

export function MenuResponsive(props) {
  const [active, setActive] = useState(false);

  function LateralMenuResponsive() {
    return (
      <BaseL active={active}>
        <ItemsDiv
          position="relative"
          background="#1F2029"
          width="250px"
          height="100%"
          display="block"
          padding="32px"
          margin="0"
          justifyContent="center"
        >
          <Exit top="36px" right="32px" onClick={() => setActive(false)} />
          <DefaultText fontWeight="700" fontSize="1.25rem" margin="0 0 32px 0">
            Navegação
          </DefaultText>
          <LateralMenu active={true} />
        </ItemsDiv>
      </BaseL>
    );
  }

  return (
    <>
      {LateralMenuResponsive()}
      <Base>
        <ItemsDiv>
          <Div>
            <Bars onClick={() => setActive(true)} margin="0 25px 0 0" />
            <Logo />
          </Div>
          <Div>
            <Div
              padding="0 24px 0 0"
              margin="0 24px 0 0"
              border="1px solid #353646"
            >
              <Bell margin="0 28px 0 0" />
              <UserPlus
                onClick={() => router.push(routesDocument.dashboardForm)}
              />
            </Div>
            <Avatar sx={{ width: 48, height: 48 }} src="/avatar.png" />
          </Div>
        </ItemsDiv>
      </Base>
    </>
  );
}
