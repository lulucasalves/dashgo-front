import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function IconBars(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faBars} />
    </Base>
  );
}
