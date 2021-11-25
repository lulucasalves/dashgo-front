import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export function IconUser(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faUser} />
    </Base>
  );
}
