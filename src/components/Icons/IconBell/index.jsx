import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

export function IconBell(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faBell} />
    </Base>
  );
}
