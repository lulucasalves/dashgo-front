import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function IconPlus(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faPlus} />
    </Base>
  );
}
