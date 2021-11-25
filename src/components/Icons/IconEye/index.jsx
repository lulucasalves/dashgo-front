import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

export function IconEye(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faEye} />
    </Base>
  );
}
