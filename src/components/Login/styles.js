import styled from 'styled-components';

export const Base = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  top: ${(props) => (props.top ? props.top : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  position: ${(props) => (props.position ? props.position : 'absolute')};
  display: flex;
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : 'block')};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  padding: ${(props) => (props.padding ? props.padding : '24px')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '8px'};
  background: ${(props) => (props.background ? props.background : '#1F2029')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  text-align: center;

  @media (max-width: 1080px) {
    padding: 16px;
  }
`;

export const Div = styled.div`
  text-align: left;
  max-width: ${(props) => (props.width ? props.width : '100%')};
  display: ${(props) => (props.display ? props.display : 'block')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  border: ${(props) => (props.border ? props.border : '0')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
`;
