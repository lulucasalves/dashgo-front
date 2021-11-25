import styled from 'styled-components';

export const Base = styled.h1`
  color: ${(props) => (props.color ? props.color : '')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.75rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};
  cursor: ${props => (props.cursor ? props.cursor : 'pointer')};

  span {
    color: #D53F8C;
  }
`;
