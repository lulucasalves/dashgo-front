import styled from 'styled-components';

export const Base = styled.div`
  max-width: ${(props) => (props.width ? props.width : '100%')};
  overflow: hidden;
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : 'block')};
  max-width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '0')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};

  padding: 0 160px;

  @media (max-width: 1360px) {
    padding: 0 40px;
  }

  @media (max-width: 1080px) {
    padding: 0 20px;
  }
`;

export const Div = styled.div`
  max-width: ${(props) => (props.width ? props.width : '100%')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;
