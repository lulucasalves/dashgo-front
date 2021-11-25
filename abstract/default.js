import styled from 'styled-components';

export const Base = styled.div`
  display: ${(props) => (props.display ? props.display : '')};
  grid-template-columns: ${(props) =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};

  margin: ${(props) => (props.margin ? props.margin : '')};
  padding: ${(props) => (props.padding ? props.padding : '')};

  font-family: ${(props) => (props.fontFamily ? props.fontFamily : '')};
  color: ${(props) => (props.color ? props.color : '')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : '')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};

  border: ${(props) => (props.border ? props.border : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};

  background: ${(props) => (props.background ? props.background : '')};
  height: ${(props) => (props.height ? props.height : '')};
  width: ${(props) => (props.width ? props.width : '')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};

  position: ${(props) => (props.position ? props.position : '')};
  left: ${(props) => (props.left ? props.left : '')};
  top: ${(props) => (props.top ? props.top : '')};
  right: ${(props) => (props.right ? props.right : '')};
  bottom: ${(props) => (props.bottom ? props.bottom : '')};
  transform: ${(props) => (props.transform ? props.transform : '')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : '')};

  overflow: ${(props) => (props.overflow ? props.overflow : '')};
  opacity: ${(props) => (props.opacity ? props.opacity : '')};
  list-style: ${(props) => (props.listStyle ? props.listStyle : '')};
`;

