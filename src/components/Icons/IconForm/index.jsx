import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

export function IconForm(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faAlignLeft} />
    </Base>
  );
}
