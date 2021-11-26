import styled from 'styled-components';

export const Base = styled.p`
  color: ${(props) =>
    props.color ? props.color : props.active ? props.active : '#EEEEF2'};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '18.75px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;
