import styled from 'styled-components';

export const Base = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : 'block')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
`;

export const Div = styled.div`
  max-width: ${(props) => (props.width ? props.width : '100%')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  background: ${(props) => (props.background ? props.background : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  height: ${(props) => (props.height ? props.height : '')};
`;

export const Td = styled.td`
  width: ${(props) => (props.width ? props.width : '260px')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  background: ${(props) => (props.background ? props.background : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  height: ${(props) => (props.height ? props.height : '')};
  width: ${(props) => (props.width ? props.width : '')};
`;

export const Tr = styled.tr`
  width: ${(props) => (props.width ? props.width : '100%')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  background: ${(props) => (props.background ? props.background : '')};
  border-bottom: ${(props) =>
    props.border ? props.border : '1px solid rgba(255, 255, 255, 0.06)'};
  height: ${(props) => (props.height ? props.height : '')};
  width: ${(props) => (props.width ? props.width : '')};
`;
