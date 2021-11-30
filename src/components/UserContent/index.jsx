import { Base, ItemsDiv, Div, Td, Tr } from './styles';
import { DashboardTitle } from '../DashboardTitle';
import { DefaultText } from '../DefaultText';
import { DefaultButton } from '../DefaultButton';
import { Plus, Arrow } from '../Icons';
import { Checkbox } from '@mui/material';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';
import { useEffect, useState } from 'react';
import { UserContentResponsive } from './UserContentResponsive';
import { CircularProgress, Link } from '@material-ui/core';
import { useUsers } from '../../server/hooks/users';
import { queryClient } from '../../server/queryClient';

export function UserContent() {
  const { data, isLoading, isFetching, error } = useUsers();
  console.log(data);

  const router = useRouter();

  const [user, setUser] = useState(
    isLoading
      ? [
          {
            id: 1,
            name: 'Lucas',
            email: 'ddiiww',
            createdAt: '21 de março de 2021',
          },
        ]
      : data,
  );

  //filter

  const [click, setClick] = useState(false);

  function orderByName(a, b) {
    if (click) {
      return a > b;
    } else {
      return a < b;
    }
  }

  //pagination

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
          margin="0 0 0 8px"
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
          margin="0 0 0 8px"
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

  async function handlePrefetch(userId) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`/users/${userId}`);

        return response.data;
      },
      { staleTime: 1000 * 60 * 10 },
    );
  }

  return (
    <>
      <UserContentResponsive />
      <Base>
        <ItemsDiv>
          <Div
            display="block"
            background="#1F2029"
            borderRadius="8px"
            padding="32px"
            height="572px"
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

            <thead>
              <Tr padding="0 0 13px 0">
                <Td width="70px" textAlign="center">
                  <Checkbox
                    color="secondary"
                    backgroundColor="primary"
                    border="1px solid #fff"
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                  />
                </Td>
                <Td>
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
                </Td>
                <Td>
                  <DefaultText
                    fontSize="0.813rem"
                    color="#4B4D63"
                    fontWeight="700"
                    lineHeight="14.06px"
                    display="flex"
                    cursor="pointer"
                  >
                    DATA DE CADASTRO <Arrow margin="-2px 0 0 12px" />
                  </DefaultText>
                </Td>
              </Tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Div justifyContent="center" margin="36px 0 0 0">
                  <CircularProgress />
                </Div>
              ) : error ? (
                <Div>
                  <DefaultText>
                    Não fui possivel obter os usuários...
                  </DefaultText>
                </Div>
              ) : (
                pageUsers.users.sort(orderByName).map((val) => {
                  return (
                    <Tr key={val.id} padding="13px 0" display="flex">
                      <Td width="70px" textAlign="center">
                        <Checkbox
                          color="secondary"
                          backgroundColor="primary"
                          border="1px solid #fff"
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                        />
                      </Td>
                      <Td>
                        <Div display="block">
                          <Link onMouseEnter={() => handlePrefetch(val.id)}>
                            <DefaultText
                              color="#9F7AEA"
                              fontWeight="700"
                              lineHeight="20px"
                            >
                              {val.name}
                            </DefaultText>
                          </Link>
                          <DefaultText
                            fontSize="0.875rem"
                            color="#9699B0"
                            fontWeight="400"
                            lineHeight="20px"
                          >
                            {val.email}
                          </DefaultText>
                        </Div>
                      </Td>
                      <Td>
                        <DefaultText>{val.createdat}</DefaultText>
                      </Td>
                    </Tr>
                  );
                })
              )}
            </tbody>
            <Div margin="22px 0 0 0" justifyContent="space-between">
              <DefaultText>
                <span>{start}</span> - <span>{end}</span> de{' '}
                <span>{user.length}</span>
              </DefaultText>
              <Div display="flex">
                {prevPage()}

                <DefaultButton
                  margin="0 0 0 8px"
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
    </>
  );
}
