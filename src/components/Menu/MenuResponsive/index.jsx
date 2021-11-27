import { Base, ItemsDiv, Div } from './styles';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { routesDocument } from '../../../routes';
import { SearchInput } from '../../SearchInput';
import { Bell, UserPlus, Bars } from '../../Icons';
import { Logo } from '../../Logo';
import { DefaultText } from '../../DefaultText';
import { Avatar } from '@mui/material';

export function MenuResponsive(props) {
  const router = useRouter();

  return (
    <Base>
      <ItemsDiv>
        <Div>
          <Bars margin="0 25px 0 0" />
          <Logo />
        </Div>
        <Div>
          <Div margin="0 25px 0 0">
            <Bell margin="0 28px 0 0" />
            <UserPlus
              onClick={() => router.push(routesDocument.dashboardForm)}
            />
          </Div>
          <Avatar sx={{ width: 48, height: 48 }} src="/avatar.png" />
        </Div>
      </ItemsDiv>
    </Base>
  );
}
