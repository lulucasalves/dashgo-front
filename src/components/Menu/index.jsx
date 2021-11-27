import { Base, ItemsDiv, Div } from './styles';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';
import { SearchInput } from '../../components/SearchInput';
import { Bell, UserPlus, Search } from '../Icons';
import { Logo } from '../Logo';
import { DefaultText } from '../DefaultText';
import { Avatar } from '@mui/material';

export function Menu(props) {
  const router = useRouter();

  return (
    <Base>
      <ItemsDiv>
        <Logo />
        <Formik
          initialValues={{
            search: '',
          }}
          validationSchema=""
          onSubmit={(values) => {
            send(values);
          }}
        >
          {({ handleChange, handleBlur, values, handleSubmit }) => (
            <Div>
              <SearchInput
                id="search"
                name="search"
                autoComplete="current-search"
                onChange={handleChange('search')}
                onBlur={handleBlur('search')}
                value={values.search}
                placeholder="Buscar na plataforma..."
              />
              <Search
                active={values.search}
                margin="0 0 0 -50px"
                onClick={() => handleSubmit()}
              />
            </Div>
          )}
        </Formik>
        <Div>
          <Div
            padding="0 32px 0 0"
            margin="0 32px 0 0"
            border="1px solid #353646"
          >
            <Bell margin="0 38px 0 0" />
            <UserPlus
              onClick={() => router.push(routesDocument.dashboardForm)}
            />
          </Div>
          <Div display="block" margin="0 16px 0 0" cursor="default">
            <DefaultText textAlign="right">Lucas Alves</DefaultText>
            <DefaultText
              textAlign="right"
              color="#9699B0"
              lineHeight="19px"
              fontSize="0.875rem"
            >
              lucas.alves.supus@outlook.com
            </DefaultText>
          </Div>
          <Avatar sx={{ width: 48, height: 48 }} src="/avatar.png" />
        </Div>
      </ItemsDiv>
    </Base>
  );
}
