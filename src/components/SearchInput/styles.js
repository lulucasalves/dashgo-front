import styled from 'styled-components';

export const Base = styled.input`
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '6px'};
  color: ${(props) => (props.color ? props.color : '#eeeef2')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '50px'};
  height: ${(props) => (props.height ? props.height : '56px')};
  width: ${(props) => (props.width ? props.width : '450px')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 32px')};
  color: ${(props) => (props.value ? '#EEEEF2' : '#797D9A')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '24px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  border: ${(props) => (props.value ? '3px solid #D53F8C' : '')};
  background: ${(props) => (props.background ? props.background : '#1F2029')};

  &:focus {
    border: 3px solid #d53f8c;
  }
`;
