import styled from 'styled-components';

export const Base = styled.p`
  color: ${(props) => (props.color ? props.color : '#EEEEF2')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '24px')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  display: ${(props) => (props.display ? props.display : '')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};

  span {
    font-weight: 700;
  }
`;
