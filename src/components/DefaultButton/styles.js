import styled from 'styled-components';

export const Base = styled.button`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '16.41px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  padding: ${(props) => (props.padding ? props.padding : '8px 12px')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  background: ${(props) => (props.background ? props.background : '#D53F8C')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '6px'};
  color: ${(props) => (props.color ? props.color : '#eeeef2')};

  &:hover {
    filter: brightness(0.9);
  }
`;
