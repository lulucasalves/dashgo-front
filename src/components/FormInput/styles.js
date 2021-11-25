import styled from 'styled-components';

export const Base = styled.input`
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '6px'};
  height: ${(props) => (props.height ? props.height : '48px')};
  width: ${(props) => (props.width ? props.width : '400px')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'left')};
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 16px')};
  color: ${(props) => (props.color ? props.color : '#eeeef2')};
  
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '21,09px')};
  background: ${(props) => (props.background ? props.background : '#181B23')};

  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  border: ${(props) =>
    props.value
      ? '3px solid #D53F8C'
      : props.errors
      ? '3px solid #C53030'
      : ''};

  &:focus {
    border: 3px solid #d53f8c;
  }
`;
