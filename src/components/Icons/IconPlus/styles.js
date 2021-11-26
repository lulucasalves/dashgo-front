import styled from 'styled-components';

export const Base = styled.p`
  color: ${(props) => (props.color ? props.color : '#EEEEF2')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;
