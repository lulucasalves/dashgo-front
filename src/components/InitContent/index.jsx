import { Base, ItemsDiv, Div } from './styles';
import { DashboardTitle } from '../DashboardTitle';
import { DefaultText } from '../DefaultText';
import Image from 'next/image';
import dynamic from 'next/dynamic';

export function InitContent(props) {
  return (
    <Base>
      <ItemsDiv>
        <Div margin="0 0 30px 0">
          <Image width="33px" height="33px" src="/hand.png" />

          <DashboardTitle margin="0 0 0 16px">
            Olá, <span>Nome</span>
          </DashboardTitle>
        </Div>

        <Div>
          <Div
            display="block"
            background="#1F2029"
            borderRadius="8px"
            padding="32px"
            width="424px"
            height="250px"
            margin="0 16px 0 0"
          >
            <DefaultText
              margin="0 0 16px 0"
              fontSize="18px"
              lineHeight="21,09px"
            >
              Inscritos da semana
            </DefaultText>
          </Div>
          <Div
            width="424px"
            height="250px"
            display="block"
            background="#1F2029"
            borderRadius="8px"
            padding="32px"
          >
            <DefaultText
              margin="0 0 16px 0"
              fontSize="18px"
              lineHeight="21,09px"
            >
              Taxa de abertura
            </DefaultText>
          </Div>
        </Div>
      </ItemsDiv>
    </Base>
  );
}
