import styled from 'styled-components';

export const Base = styled.p`
  color: ${(props) => (props.color ? props.color : '#D53F8C')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.25rem')};
  margin: ${(props) => (props.margin ? props.margin : '0 0 -10px 0')};
  cursor: pointer;
`;
