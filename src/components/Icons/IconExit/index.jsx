import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export function IconExit(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faTimes} />
    </Base>
  );
}
