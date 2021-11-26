import styled from 'styled-components';

export const Base = styled.p`
  color: ${(props) => (props.active ? '#D53F8C' : '#4B4D63')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};  
`;
