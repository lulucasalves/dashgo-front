import styled from 'styled-components';

export const Base = styled.button`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.125rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '21.09px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  height: ${(props) => (props.height ? props.height : '48px')};
  width: ${(props) => (props.width ? props.width : '400px')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  background: ${(props) => (props.background ? props.background : '#D53F8C')};
  opacity: ${(props) => (props.errors ? '0.5' : '1')};
  color: ${(props) => (props.color ? props.color : '#eeeef2')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '6px'};

  &:hover {
    filter: ${(props) => (props.errors ? '' : 'brightness(0.9)')};
  }
`;
