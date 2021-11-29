import { Base, ItemsDiv, Div } from './styles';
import { DashboardTitle } from '../DashboardTitle';
import { DefaultText } from '../DefaultText';
import Image from 'next/image';
import { InitContentResponsive } from './InitContentResponsive';
import { Graphic } from '../Graphic';
export function InitContent(props) {
  return (
    <>
      <InitContentResponsive />
      <Base>
        <ItemsDiv>
          <Div margin="0 0 30px 0">
            <Image width="33px" height="33px" src="/hand.png" />

            <DashboardTitle margin="0 0 0 16px">
              Olá, <span>Lucas</span>
            </DashboardTitle>
          </Div>

          <Div>
            <Div
              display="block"
              background="#1F2029"
              borderRadius="8px"
              padding="32px"
              width="100%"
              height="250px"
              margin="0 16px 0 0"
            >
              <DefaultText
                margin="0 0 16px 0"
                fontSize="1.125rem"
                lineHeight="21.09px"
              >
                Inscritos da semana
              </DefaultText>
              <Graphic />
            </Div>
            <Div
              width="100%"
              height="250px"
              display="block"
              background="#1F2029"
              borderRadius="8px"
              padding="32px"
            >
              <DefaultText
                margin="0 0 16px 0"
                fontSize="1.125rem"
                lineHeight="21.09px"
              >
                Taxa de abertura
              </DefaultText>
              <Graphic />
            </Div>
          </Div>
        </ItemsDiv>
      </Base>
    </>
  );
}
