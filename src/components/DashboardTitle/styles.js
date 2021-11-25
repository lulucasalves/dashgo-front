import styled from 'styled-components';

export const Base = styled.label`
  color: ${(props) => (props.color ? props.color : '')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.75rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '32.81px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  cursor: ${(props) => (props.cursor ? props.cursor : 'default')};
`;
