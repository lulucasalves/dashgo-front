import styled from 'styled-components';

export const Base = styled.div`
  height: ${(props) => (props.height ? props.height : '100%')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0 100px 0 0')};
  display: block;

  @media (max-width: 1080px) {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
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
  width: ${(props) => (props.width ? props.width : '100%')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;
