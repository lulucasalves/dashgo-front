import styled from 'styled-components';

export const Base = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  max-height: ${(props) => (props.height ? props.height : '100%')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  display: none;

  @media (max-width: 1080px) {
    display: block;
  }
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : 'block')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const Div = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  display: ${(props) => (props.display ? props.display : 'block')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  background: ${(props) => (props.background ? props.background : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  border-bottom: ${(props) => (props.border ? props.border : '')};

  height: ${(props) => (props.height ? props.height : '')};
`;
