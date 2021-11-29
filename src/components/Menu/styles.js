import styled from 'styled-components';

export const Base = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '120px')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  display: block;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  margin: ${(props) => (props.margin ? props.margin : '28px 0 36px 0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'space-between'};
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
  border-right: ${(props) => (props.border ? props.border : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;

export const Label = styled.label`
  max-width: ${(props) => (props.width ? props.width : '100%')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  border-right: ${(props) => (props.border ? props.border : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;
