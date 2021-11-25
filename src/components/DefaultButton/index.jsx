import { Base } from './styles';

export function DefaultButton(props) {
  return <Base {...props}>{props.children}</Base>;
}
