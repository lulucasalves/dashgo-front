import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export function IconArrow(props) {
  return (
    <Base {...props}>
      {props.active ? (
        <FontAwesomeIcon icon={faChevronUp} />
      ) : (
        <FontAwesomeIcon icon={faChevronDown} />
      )}
    </Base>
  );
}
