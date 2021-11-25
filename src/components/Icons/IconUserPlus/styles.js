import styled from 'styled-components';

export const Base = styled.p`
  color: ${(props) => (props.color ? props.color : '#9699B0')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};

  &:hover {
    color: #d53f8c;
    transition: 0.3s;
  }
`;
