import { Base, ItemsDiv, Div, Td, Tr } from './styles';
import { DashboardTitle } from '../../DashboardTitle';
import { DefaultText } from '../../DefaultText';
import { DefaultButton } from '../../DefaultButton';
import { Plus, Arrow, Map } from '../../Icons';
import { Checkbox } from '@mui/material';
import { useRouter } from 'next/router';
import { routesDocument } from '../../../routes';
import { useEffect, useState } from 'react';

export function UserContentResponsive(props) {
  const router = useRouter();

  const [user, setUser] = useState([
    {
      id: 3,
      name: 'User 3',
      email: 'josenazare@gmail.com',
      date: '19 de março de 2021',
    },
    {
      id: 1,
      name: 'User 1',
      email: 'josenazare@gmail.com',
      date: '19 de março de 2021',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'josenazare@gmail.com',
      date: '19 de março de 2021',
    },
  ]);

  const [click, setClick] = useState(false);

  function orderByName(a, b) {
    if (click) {
      return b.name < a.name;
    } else {
      return b.name > a.name;
    }
  }

  const usersPerPage = 5;

  const [pageUsers, setPageUsers] = useState({
    page: 1,
    totalPage: Math.ceil(user.length / usersPerPage),
    users: [],
  });

  useEffect(() => {
    let page = pageUsers.page - 1;
    let start = page * usersPerPage;
    let end = start + usersPerPage;

    const paginatedUsers = user.slice(start, end);
    setPageUsers({ ...pageUsers, users: paginatedUsers });
  }, [pageUsers.page]);

  const prevPage = () => {
    if (pageUsers.page > 1) {
      return (
        <DefaultButton
          onClick={() =>
            setPageUsers({ ...pageUsers, page: pageUsers.page - 1 })
          }
          padding="9px 12px"
          fontSize="0.75rem"
          lineHeight="14.06px"
          background="#353646"
        >
          {pageUsers.page - 1}
        </DefaultButton>
      );
    }
  };

  const nextPage = () => {
    if (pageUsers.page < pageUsers.totalPage) {
      return (
        <DefaultButton
          background="#353646"
          onClick={() =>
            setPageUsers({ ...pageUsers, page: pageUsers.page + 1 })
          }
          padding="9px 12px"
          fontSize="0.75rem"
          lineHeight="14.06px"
        >
          {pageUsers.page + 1}
        </DefaultButton>
      );
    }
  };

  const page = pageUsers.page - 1;
  const start = page * usersPerPage;
  const end = start + usersPerPage;

  return (
    <Base>
      <ItemsDiv>
        <Div
          display="block"
          background="#1F2029"
          borderRadius="8px"
          padding="24px"
          height="586px"
        >
          <Div justifyContent="space-between" margin="0 0 35px 0">
            <DashboardTitle>Usuários</DashboardTitle>
            <DefaultButton
              onClick={() => router.push(routesDocument.dashboardForm)}
              display="flex"
            >
              <Plus margin="0 12px 0 0" />
              Criar novo
            </DefaultButton>
          </Div>

          <Div border="1px solid rgba(255, 255, 255, 0.06)">
            <Div>
              <Div textAlign="center" padding="0 24px 0 0">
                <Checkbox
                  color="secondary"
                  backgroundColor="primary"
                  border="1px solid #fff"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                />
              </Div>
              <Div>
                <DefaultText
                  fontSize="0.813rem"
                  color="#4B4D63"
                  fontWeight="700"
                  lineHeight="14.06px"
                  display="flex"
                  cursor="pointer"
                  onClick={() => setClick(!click)}
                >
                  USUÁRIO <Arrow active={click} margin="-2px 0 0 12px" />
                </DefaultText>
              </Div>
            </Div>
          </Div>
          <Div display="block">
            {pageUsers.users.sort(orderByName).map((val) => {
              return (
                <Div
                  key={val.id}
                  padding="13px 0"
                  border="1px solid rgba(255, 255, 255, 0.06)"
                >
                  <Div textAlign="center" margin="0 24px 0 0">
                    <Checkbox
                      color="secondary"
                      backgroundColor="primary"
                      border="1px solid #fff"
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                    />
                  </Div>
                  <Div>
                    <Div display="block">
                      <DefaultText
                        color="#9F7AEA"
                        fontWeight="700"
                        lineHeight="20px"
                      >
                        {val.name}
                      </DefaultText>
                      <DefaultText
                        fontSize="0.875rem"
                        color="#9699B0"
                        fontWeight="400"
                        lineHeight="20px"
                      >
                        {val.email}
                      </DefaultText>
                    </Div>
                  </Div>
                </Div>
              );
            })}
          </Div>
          <Div display="block">
            <DefaultText margin="16px 0 16px 0" textAlign="center">
              <span>{`${start} - ${end}`}</span> de <span>{user.length}</span>
            </DefaultText>
            <Div display="flex" justifyContent="center">
              {prevPage()}

              <DefaultButton
                margin="0 8px"
                padding="9px 12px"
                fontSize="0.75rem"
                lineHeight="14.06px"
              >
                {pageUsers.page}
              </DefaultButton>

              {nextPage()}
            </Div>
          </Div>
        </Div>
      </ItemsDiv>
    </Base>
  );
}
