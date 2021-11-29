import { Base, ItemsDiv, Div } from './styles';
import { DefaultText } from '../../DefaultText';
import { Graphic } from '../../Graphic';

export function InitContentResponsive(props) {
  return (
    <Base>
      <ItemsDiv>
        <Div>
          <Div
            background="#1F2029"
            borderRadius="8px"
            padding="32px"
            width="100%"
            height="250px"
            margin="0 0 16px 0"
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
  );
}
