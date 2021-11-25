import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export function IconUserPlus(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faUserPlus} />
    </Base>
  );
}
