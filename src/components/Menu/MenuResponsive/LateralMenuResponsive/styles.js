import styled from 'styled-components';

export const Base = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0 0 0 -24px')};
  display: none;
  position: ${(props) => (props.position ? props.position : 'absolute')};
  background: ${(props) =>
    props.background ? props.background : 'rgba(0,0,0,0.5)'};
  z-index: 9;

  @media (max-width: 1080px) {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;

export const ItemsDiv = styled.div`
  position: ${(props) => (props.position ? props.position : 'relative')};
  background: ${(props) => (props.background ? props.background : '#1F2029')};
  width: ${(props) => (props.width ? props.width : '250px')};
  height: ${(props) => (props.height ? props.height : '100%')};
  display: ${(props) => (props.display ? props.display : 'block')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '32px')};
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
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;
