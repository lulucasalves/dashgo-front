import styled from 'styled-components';

export const Base = styled.p`
  color: ${(props) => (props.active ? '#D53F8C' : '#EEEEF2')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;
