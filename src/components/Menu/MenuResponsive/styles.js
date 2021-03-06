import styled, { keyframes } from 'styled-components';

export const Base = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100px')};
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
  display: ${(props) => (props.display ? props.display : 'flex')};
  margin: ${(props) => (props.margin ? props.margin : '0 0 36px 0')};
  padding: ${(props) => (props.padding ? props.padding : '28px 0 0 0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  position: ${(props) => (props.position ? props.position : '')};
  background: ${(props) => (props.background ? props.background : '')};
  width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '')};
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

//LateralMenu ======================================================================================

export const BaseL = styled.div`
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
