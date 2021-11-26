import { Base, ItemsDiv, Div, Td, Tr } from './styles';
import { DashboardTitle } from '../DashboardTitle';
import { DefaultText } from '../DefaultText';
import { DefaultButton } from '../DefaultButton';
import { Plus, Arrow } from '../Icons';
import { Checkbox } from '@mui/material';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';

export function UserContent(props) {
  const router = useRouter();

  return (
    <Base>
      <ItemsDiv>
        <Div
          display="block"
          background="#1F2029"
          borderRadius="8px"
          padding="32px"
          width="864px"
          height="572px"
        >
          <Div justifyContent="space-between" margin="0 0 44px 0">
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
              <Td width="365px">
                <DefaultText
                  fontSize="13px"
                  color="#4B4D63"
                  fontWeight="700"
                  lineHeight="14.06px"
                  display="flex"
                  cursor="pointer"
                >
                  USUÁRIO <Arrow margin="-2px 0 0 12px" />
                </DefaultText>
              </Td>
              <Td width="365px">
                <DefaultText
                  fontSize="13px"
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
            <Tr padding="13px 0">
              <Td width="70px" textAlign="center">
                <Checkbox
                  color="secondary"
                  backgroundColor="primary"
                  border="1px solid #fff"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                />
              </Td>
              <Td width="365px">
                <Div display="block">
                  <DefaultText
                    color="#9F7AEA"
                    fontWeight="700"
                    lineHeight="20px"
                  >
                    User 1
                  </DefaultText>
                  <DefaultText
                    fontSize="14px"
                    color="#9699B0"
                    fontWeight="400"
                    lineHeight="20px"
                  >
                    john.doe@example.com
                  </DefaultText>
                </Div>
              </Td>
              <Td width="365px">
                <DefaultText>19 de março de 2021</DefaultText>
              </Td>
            </Tr>
          </tbody>
        </Div>
      </ItemsDiv>
    </Base>
  );
}
