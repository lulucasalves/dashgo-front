import { Base, ItemsDiv, Div } from './styles';
import { useRouter } from 'next/router';
import { routesDocument } from '../../../routes';
import { Bell, UserPlus, Bars } from '../../Icons';
import { Logo } from '../../Logo';
import { Avatar } from '@mui/material';
import { LateralMenuResponsive } from './LateralMenuResponsive';
import { useState } from 'react';

export function MenuResponsive(props) {
  const router = useRouter();
  const [click, setClick] = useState(false);

  function active() {
    return true;
  }

  return (
    <>
      <LateralMenuResponsive active={click} />
      <Base>
        <ItemsDiv>
          <Div>
            <Bars onClick={() => setClick(true)} margin="0 25px 0 0" />
            <Logo />
          </Div>
          <Div>
            <Div padding="0 25px 0 0" border="1px solid rgba(255,255,255,0.05)">
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
