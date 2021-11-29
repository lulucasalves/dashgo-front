import styled from 'styled-components';

export const Base = styled.p`
  
  color: ${(props) => (props.color ? props.color : '#EEEEF2')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.25rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  position: ${(props) => (props.position ? props.position : 'absolute')};
  top: ${(props) => (props.top ? props.top : '')};
  right: ${(props) => (props.right ? props.right : '')};
`;
